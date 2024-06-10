// next.config.mjs
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: '/add-book',
          destination: '/add-book',
        },
      ];
    },
  }
  
  export default nextConfig
  
