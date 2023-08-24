import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Matheus Blog",
    template: "%s | Matheus Blog",
    absolute: "Sobrescreve o dois acima",
  },
  robots: {
    follow: true,
    index: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Sistema olá mundo</h1>
        {children}
      </body>
    </html>
  );
}
