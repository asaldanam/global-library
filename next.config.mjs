/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async redirects() {
        return [
            // Basic redirect
            {
                source: '/',
                destination: '/write',
                permanent: true
            }
        ];
    }
    // output: 'export',
    // experimental: {
    //     typedRoutes: true,
    // }
};

export default nextConfig;
