import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Edge security layer for the portfolio.
 * Hardens responses; does not claim "unhackable" — reduces common web attack surface.
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const { pathname } = request.nextUrl;

  // Block common probe paths early (no need to hit app)
  const blocked = [
    "/.env",
    "/.git",
    "/wp-admin",
    "/wp-login.php",
    "/xmlrpc.php",
    "/phpmyadmin",
    "/admin.php",
    "/.aws",
    "/server-status",
  ];
  if (blocked.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return new NextResponse("Not Found", { status: 404 });
  }

  // Security headers (defense in depth; also set in next.config for static assets)
  const headers = response.headers;
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "DENY");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("X-DNS-Prefetch-Control", "off");
  headers.set("Cross-Origin-Opener-Policy", "same-origin");
  headers.set("Cross-Origin-Resource-Policy", "same-origin");
  headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  );
  headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload",
  );
  // CSP: self-hosted Next fonts; FormSubmit for contact; no third-party scripts
  headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self' https://formsubmit.co",
      "upgrade-insecure-requests",
    ].join("; "),
  );

  // Reduce fingerprint noise
  headers.delete("X-Powered-By");

  return response;
}

export const config = {
  matcher: [
    /*
     * Apply to all paths except Next internals and static files with extensions.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)",
  ],
};
