


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ReduxProvider, ProviderAsync, NotificationBlock, Loading, LocaleProvider } from "@/build/Providers/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"}>
      <body className={inter.className}>
          <ProviderAsync>
          
          <ReduxProvider>
          <LocaleProvider>
          {children}
          </LocaleProvider>
          <NotificationBlock />
          </ReduxProvider>
          
          </ProviderAsync>
        
      </body>
    </html>
  );
}

{/*
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"}>
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}
* */}