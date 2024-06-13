const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3000/api/:path*",
      },
    ];
  },
};

export default nextConfig;

// // next.config.mjs
// const nextConfig = {
//     reactStrictMode: true,
//     async rewrites() {
//       return [
//         {
//           source: '/add-book',
//           destination: '/add-book',
//         },
//       ];
//     },
//   }

//   export default nextConfig
