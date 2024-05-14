import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ua', 'pl', 'ru'],
 
  // Used when no locale matches
  localePrefix: 'never',
  defaultLocale: 'ru'
});
 
export const config = {
    // Match only internationalized pathnames
    matcher: ['/((?!api|_next|.*\\..*).*)']
  };