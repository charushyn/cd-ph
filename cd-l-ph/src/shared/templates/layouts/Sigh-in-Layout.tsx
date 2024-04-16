import type { Metadata } from "next";

import { Footer } from "@/widgets/index";
import { Link } from "@/shared/ui/index";

import { iconFinder } from "../../../../public/helpers/index";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function SighInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=''>
          <header className="h-[70px] p-4 bg-black flex flex-row justify-between items-center">
            <Link isArrowNeeded={true} arrowClassName="rotate-180" text="" href="/" className=" flex-row-reverse text-white p-0"></Link>
            {iconFinder("small-gold-logo")}
          </header>
          <hr></hr>
          {children}
          <hr></hr>
        <Footer></Footer>
    </main>
  );
}