/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["10.10.10.61", "192.168.0.102"],
	},
};

module.exports = nextConfig;
