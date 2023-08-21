import type { Metadata } from "next";
import { getUsers } from "./services/get-users";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Aprendendo a usar as rotas do next13 pela pasta app",
  description: "Puta merda em, eu acertei mas vacilei",
};
export default async function UserPage() {
  const users = await getUsers();
  return (
    <>
      <h2>Usuário</h2>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              {user.first_name} {user.last_name} ({user.email})
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
