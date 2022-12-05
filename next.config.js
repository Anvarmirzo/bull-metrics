/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["10.10.10.61"],
	},
};

module.exports = nextConfig;
