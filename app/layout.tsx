import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import AppContext from "./context/appContext";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qtec - Todo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppContext>{children}</AppContext>
      </body>
    </html>
  );
}
