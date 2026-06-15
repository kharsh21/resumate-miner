import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "@/components/modules/Navbar";
import Footer from "@/components/modules/Footer";

interface DefaultLayoutProps {
  title: string;
  content?: string;
  children: ReactNode;
  /** Render children edge-to-edge (e.g. the 3D landing page) instead of inside a centered container. */
  fullBleed?: boolean;
}

export default function DefaultLayout({
  title,
  content,
  children,
  fullBleed = false,
}: DefaultLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={content || "A sleek and modern resume screening application"}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="layout">
        <Navbar />
        <main className={fullBleed ? "layout__main" : "layout__main container"}>
          {children}
        </main>
        <Footer />
      </div>

      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .layout__main {
          flex: 1;
          width: 100%;
        }
        .layout__main.container {
          padding-top: 40px;
          padding-bottom: 64px;
        }
      `}</style>
    </>
  );
}
