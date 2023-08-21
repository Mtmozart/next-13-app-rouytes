export const metadata = {
  title: "Rota pública",
  description: "Aprendendo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Sitema olá mundo</h1>
        {children}
      </body>
    </html>
  );
}
