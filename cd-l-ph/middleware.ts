'use server'

import createIntlMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'
import { cookies } from 'next/headers';

export default async function middleware(request: NextRequest, event: NextFetchEvent) {
    const cookieStore = cookies()
    if(request.nextUrl.pathname.includes('cabinet-admin')){
          if(!cookieStore.get('refreshToken')?.value){
            return NextResponse.redirect(`https://cdfinance.pl/login`)
          }
          let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('Accept', 'application/json');
          headers.append('Cookie', `${cookieStore}`)
          const response = await fetch(`https://backend.cdfinance.pl/verify`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: headers
          }).then(data => {
            if(data.ok){
               return data.json()
            }
            throw new Error()
          }).catch((e) => console.log(e))

          if(!response?.allow){
            return NextResponse.redirect('https://cdfinance.pl/login')

          }
    }

    if(request.nextUrl.pathname.includes('login')){
      if(cookieStore.get('refreshToken')?.value){
        let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('Accept', 'application/json');
          headers.append('Cookie', `${cookieStore}`)
          const response = await fetch(`https://backend.cdfinance.pl/verify`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: headers
          }).then(data => {
            if(data.ok){
               return data.json()
            }
            throw new Error()
          }).catch((e) => 
              console.log(e)
            )

          if(response?.allow){
            return NextResponse.redirect('https://cdfinance.pl/cabinet-admin')
          }
        }
    }

    
    const defaultLocale = request.headers.get('locale') || 'en'
  
  
    const handleI18nRouting = createIntlMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'ua', 'pl', 'ru'],
      
    // Used when no locale matches
      localePrefix: 'never',
      defaultLocale
    });

    const response = handleI18nRouting(request);

    return response;
}
 

 
export const config = {
    // Match only internationalized pathnames
    // matcher: ['/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)']
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  };