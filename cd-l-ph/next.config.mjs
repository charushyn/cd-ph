import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  './src/shared/utils/next-intl/i18n.ts'
);
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['cdfinance.pl', 'backend.cdfinance.pl']
    }
  },
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


export default withNextIntl(nextConfig);