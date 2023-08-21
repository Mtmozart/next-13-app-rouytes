"use client";
import type { Metadata } from "next";
import { useRouter } from "next/navigation";
export const metadata: Metadata = {
  title: "Login",
  description: "Outra tentativa",
};

export default function LoginPage() {
  const router = useRouter();
  return (
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
  );
}
