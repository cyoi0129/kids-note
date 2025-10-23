import type { Metadata } from "next";
import { MockProvider } from "@/services/common/MockProvider";
import { ServerCookie } from "@/services/common/ServerCookie";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "@/styles/base.scss";

export const metadata: Metadata = {
  title: "Kids Note App",
  description: "Kids Note App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#30d5c8" />
      </head>
      <body>
        <MockProvider />
        <Header />
        <ServerCookie>{children}</ServerCookie>
        <Footer />
      </body>
    </html>
  );
}
