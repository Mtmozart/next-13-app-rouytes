import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aprendendo a usar as rotas do next13 pela pasta app",
  description: "Vendo aula no youtube",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <h1>Sistema com olá mundo</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link> <hr />
              <Link href="/users">Usuários</Link> <hr />
              <Link href="/login">Login</Link>
              <hr />
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
