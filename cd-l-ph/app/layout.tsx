import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CD Finance",
  description: "Services for insurance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"}>
      <body>
          {children}
      </body>
    </html>
  );
}