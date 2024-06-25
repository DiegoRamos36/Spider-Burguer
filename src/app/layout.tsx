import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";


export const metadata: Metadata = {
  title: "Spider Burguer",
  description: "A melhor hamburgueria do Rio de Janeiro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <div>
          <Header />
          {children}
        </div>
        </body>
    </html>
  );
}
