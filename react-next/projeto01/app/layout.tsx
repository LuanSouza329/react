import type { Metadata } from "next";
import "./globals.css";
import { Topo } from "@/src/components/Topo";


export const metadata: Metadata = {
  title: "My first app"
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Topo />
        {children}
      </body>
    </html>
  );
}
