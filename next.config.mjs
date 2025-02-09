/** @type {import('next').NextConfig} */
const nextConfig = {
   output: "export", // Generates static files
   trailingSlash: true, // Ensures URLs end with "/"
   distDir: "out", // Ensures the output folder is correctly set
   images: {
      unoptimized: true, // Required for static export to prevent image optimization issues
   },
};

export default nextConfig;
