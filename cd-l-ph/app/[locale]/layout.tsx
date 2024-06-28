import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import { ReduxProvider, ProviderAsync, NextIntlProvider, Loading } from "@/build/Providers/index";
export const metadata: Metadata = {
  title: "CD Finance",
  description: "Services for insurance",
  icons: {
    icon: [
      {
        url: "../../public/images/icon.ico", // /public path
        href: "../../public/images/icon.ico", // /public path
      },
    ],
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"} suppressHydrationWarning={true}>
            <head>
            {/* <link rel="icon" type="image/x-icon" href="/favicon.ico"></link> */}
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link
              rel="apple-touch-icon"
              href="/apple-icon?<generated>"
              type="image/<generated>"
              sizes="<generated>"
            />
            <link rel="icon" href="/favicon.ico" sizes="any" />
            {/* <link rel="icon" href="http://localhost:3000/favicon.ico" />
            <link rel="shortcut icon" href="favicon.ico"></link> */}
            </head>      
      <body suppressHydrationWarning={true}>
          <Loading>
          <ProviderAsync>
          <ReduxProvider>
            <NextIntlProvider>
                {children}
            </NextIntlProvider>
          </ReduxProvider>
          </ProviderAsync>
          </Loading>
      </body>
    </html>
  );
}