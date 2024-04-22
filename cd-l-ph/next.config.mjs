import withVideos from 'next-videos'
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin(
  './i18n.ts'
);
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
            port: '',
            pathname: '/wikipedia/**/**/**/**/**/**/**',
          },
        ],
      },
      eslint: {
        ignoreDuringBuilds: true,
      }
};


export default withNextIntl(withVideos(nextConfig));