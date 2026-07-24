import { NextResponse } from "next/server";

export const runtime = "edge";

const EMAIL = process.env.CONTACT_EMAIL || "varsanirumit@gmail.com";
const MAX_NAME = 100;
const MAX_EMAIL = 200;
const MAX_MESSAGE = 4000;
const MIN_MESSAGE = 5;

// Simple per-isolate rate map (best-effort on Edge; FormSubmit is secondary control)
const hits = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60_000;
const MAX_HITS = 5;

function clientKey(req: Request): string {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") || "unknown";
}

function rateLimit(key: string): boolean {
  const now = Date.now();
  const row = hits.get(key);
  if (!row || now > row.reset) {
    hits.set(key, { count: 1, reset: now + WINDOW_MS });
    return true;
  }
  if (row.count >= MAX_HITS) return false;
  row.count += 1;
  return true;
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= MAX_EMAIL;
}

function sanitize(value: string, max: number): string {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max);
}

export async function POST(req: Request) {
  try {
    if (!rateLimit(clientKey(req))) {
      return NextResponse.json(
        { ok: false, error: "rate_limited" },
        { status: 429, headers: { "Retry-After": "60" } },
      );
    }

    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ ok: false, error: "unsupported_media" }, { status: 415 });
    }

    const body = (await req.json()) as Record<string, unknown>;

    // Honeypot: bots fill hidden fields; humans leave empty
    const company = String(body.company ?? body.website ?? "");
    if (company.trim().length > 0) {
      // Silent success to avoid teaching bots
      return NextResponse.json({ ok: true });
    }

    const name = sanitize(String(body.name ?? ""), MAX_NAME);
    const email = sanitize(String(body.email ?? ""), MAX_EMAIL);
    const message = sanitize(String(body.message ?? ""), MAX_MESSAGE);

    if (!name || name.length < 2) {
      return NextResponse.json({ ok: false, error: "invalid_name" }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
    }
    if (!message || message.length < MIN_MESSAGE) {
      return NextResponse.json({ ok: false, error: "invalid_message" }, { status: 400 });
    }

    // Deliver via FormSubmit (no secrets in client)
    const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `Portfolio contact from ${name}`.slice(0, 120),
        _template: "table",
        _captcha: "false",
        _replyto: email,
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: false, error: "method_not_allowed" }, { status: 405 });
}
