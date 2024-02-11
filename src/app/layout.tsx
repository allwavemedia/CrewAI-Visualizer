import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import BottomNav from "@/components/bottom-nav";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import SideNav from "@/components/side-nav";
import TopNav from "@/components/top-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CrewAI Visualizer",
  description: "Interactive user interface for CrewAI package.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav />
        <MaxWidthWrapper>
          <div className="flex">
            <SideNav />
            <main className="flex-1">
              <div
                style={{ marginTop: 35 }}
                className="flex flex-col pt-4 sm:ml-[120px] md:ml-[250px] sm:border-r sm:border-zinc-700 pb-20 h-full"
              >
                {children}
              </div>
            </main>
          </div>
        </MaxWidthWrapper>
        <BottomNav />
      </body>
    </html>
  );
}
