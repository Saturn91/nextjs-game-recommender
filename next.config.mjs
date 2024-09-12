/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/top-100-steam-games",
        destination: "https://steamspy.com/api.php?request=top100in2weeks",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shared.akamai.steamstatic.com",
        port: "",
        pathname: "/store_item_assets/steam/apps/**",
      },
    ],
  },
};

export default nextConfig;
