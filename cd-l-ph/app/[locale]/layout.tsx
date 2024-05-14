import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";

import { ReduxProvider, ProviderAsync, NextIntlProvider, BarLoad } from "@/build/Providers/index";

export const metadata: Metadata = {
  title: "CD Finance",
  description: "Services for insurance",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"} suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
          <ProviderAsync>
          <ReduxProvider>
            <NextIntlProvider>
              <Suspense fallback={<BarLoad />}>
                {children}
              </Suspense>
            </NextIntlProvider>
          </ReduxProvider>
          </ProviderAsync>
      </body>
    </html>
  );
}