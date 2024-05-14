import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ua', 'pl'],
 
  // Used when no locale matches
  localePrefix: 'never',
  defaultLocale: 'en'
});
 
export const config = {
    // Match only internationalized pathnames
    matcher: ['/((?!api|_next|.*\\..*).*)']
  };