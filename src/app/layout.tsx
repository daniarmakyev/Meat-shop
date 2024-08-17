import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Досторкон",
  description: "Продажа фарша, филе оптом и в розницу",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Продажа фарша, филе оптом и в розницу" />
        <meta name="keywords" content="фарш, филе, опт, розница, мясные продукты" />
        <meta name="author" content="Ваша компания" />
        <meta property="og:title" content="Досторкон" />
        <meta property="og:description" content="Продажа фарша, филе оптом и в розницу" />
        <meta property="og:image" content="/logo.png" />
        <link rel="icon" href="../../public/favicon.ico" />
        <link rel="stylesheet" href="./Null.css" />
      </Head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
