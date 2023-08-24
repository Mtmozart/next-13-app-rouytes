"use client";
import type { Metadata } from "next";
import { useRouter } from "next/navigation";
export const metadata: Metadata = {
  description: "Outra tentativa, lembre-se de ter até 160 caracteres",
  openGraph: {
    images: [
      "https://img.freepik.com/fotos-gratis/bela-arquitetura-e-construcao-da-paisagem-urbana-de-toquio_74190-7538.jpg?w=900&t=st=1692909988~exp=1692910588~hmac=30ce65bc5e10061395773b4d332a7be5a595710f6d81b21201d2b1f1873f2472",
    ],
    authors: ["Matheus Mozart"],
  },
  twitter: {
    images: [
      "https://img.freepik.com/fotos-gratis/bela-arquitetura-e-construcao-da-paisagem-urbana-de-toquio_74190-7538.jpg?w=900&t=st=1692909988~exp=1692910588~hmac=30ce65bc5e10061395773b4d332a7be5a595710f6d81b21201d2b1f1873f2472",
    ],
    description: "Twitter é diferentão",
  },
};

export default function LoginPage() {
  const router = useRouter();
  return (
    <>
      <title>Título, se eu não o passar vai para o default </title>
      <form
        onSubmit={(e) => {
          router.push("/");
          e.preventDefault();
        }}
      >
        <div>
          <label>E-mail</label>
          <input type="email" />
        </div>
        <div>
          <label>Senha</label>
          <input type="password" />
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </>
  );
}
