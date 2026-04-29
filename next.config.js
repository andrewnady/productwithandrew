/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: false,
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value:
              '<https://productwithandrew.com>; rel="canonical"',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
