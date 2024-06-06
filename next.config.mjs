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
            },
            {
                protocol: 'https',
                hostname: 'avanzu.s3.us-east-2.amazonaws.com'
            }
        ]
    }
};

export default nextConfig;
