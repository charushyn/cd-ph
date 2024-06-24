import { CabinetAdmin } from "@/build/index";

import type { Metadata } from "next";
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
    <CabinetAdmin>
        {children}
    </CabinetAdmin>
  );
}