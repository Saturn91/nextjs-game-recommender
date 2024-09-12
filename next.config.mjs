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
};

export default nextConfig;
