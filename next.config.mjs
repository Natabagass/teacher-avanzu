/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ui-avatars.com'
            },
            {
                protocol: 'https',
                hostname: 'aoyfqtbcektucqlryxvj.supabase.co'
            }
        ]
    }
};

export default nextConfig;
