/* eslint-disable @next/next/no-page-custom-font */
import { MobileNavbar } from "@/modules/shareds/MobileNavbar";
import { Sidebar } from "@/modules/shareds/Sidebar";
import Head from "next/head";

export const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Song Database - PyPyDance</title>
        <meta
          name="description"
          content="a songs database seacher for pypydance worlds"
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-12 gap-6">
          <nav className="col-span-3 hidden lg:block">
            <Sidebar />
          </nav>
          <main className="col-span-12 lg:col-span-9">{props.children}</main>
        </div>
        <MobileNavbar />
      </div>
    </>
  );
};
