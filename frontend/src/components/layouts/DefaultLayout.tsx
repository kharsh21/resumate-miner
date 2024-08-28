// import React, { ReactNode } from "react";
// import Footer from "@/components/modules/Footer";
// import Header from "@/components/modules/Header";
// import Head from "next/head";

// interface DefaultLayoutProps {
//   children: ReactNode;
//   title: string;
//   content: string;
// }

// const DefaultLayout: React.FC<DefaultLayoutProps> = ({ title, content, children }) => {
//   return (
//     <>
//       <Head>
//         <title>{title}</title>
//         <meta name="description" content={content} />
//       </Head>
//       <Header />
//       <div className="container mt-5">{children}</div>
//       <Footer />
//     </>
//   );
// };

// DefaultLayout.defaultProps = {
//   title: "Superforecaster",
//   content: "",
// };

// export default DefaultLayout;
import Head from 'next/head';

interface DefaultLayoutProps {
  title: string;
  children: ReactNode;
}

export default function DefaultLayout({ title, children }: DefaultLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="A sleek and modern resume screening application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-primary text-white py-4">
        <div className="container">
          <h1 className="text-center">Resume Screening App</h1>
        </div>
      </header>
      <main className="container my-5">
        {children}
      </main>
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          &copy; 2024 Resume Screening App. All rights reserved.
        </div>
      </footer>
    </>
  );
}
