import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Avoid picking parent ~/package-lock.json as workspace root
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
