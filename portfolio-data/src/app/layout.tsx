import type { Metadata } from "next";
import {Inter} from "next/font/google"
import "./globals.css";

export const metadata: Metadata = {
  title: "Luan Souza | Data Analyst",
  description: "Portfólio de projetos em Python, SQL e Power BI.",
};

const inter = Inter({
  subsets:['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
    >
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

