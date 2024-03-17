/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `window` being defined
      if (!isServer) {
        config.resolve.fallback.fs = false;
        config.resolve.fallback.module = false;
      }
  
      return config;
    },
  };
  
  export default nextConfig;
  