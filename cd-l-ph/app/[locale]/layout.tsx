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
      <body suppressHydrationWarning={true}>
          {/* <Loading> */}
          <ProviderAsync>
          <ReduxProvider>
            <NextIntlProvider>
                {children}
            </NextIntlProvider>
          </ReduxProvider>
          </ProviderAsync>
          {/* </Loading> */}
      </body>
    </html>
  );
}