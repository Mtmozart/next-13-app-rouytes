import type { Metadata } from "next";
import { getUserById } from "../services/get-user-by-id";
import OthersUsers from "../components/others-users";
export const metadata: Metadata = {
  title: "Passar como props",
  description: "Passar como props",
};
export default async function UserDetailPage({
  params,
}: {
  params: { userId: string };
}) {
  const user = await getUserById(params.userId);
  return (
    <>
      <h2>
        Dados: {user.first_name} {user.last_name}
      </h2>
      <span>email: {user.email}</span>
      <hr />
      <h3>Outros usuários</h3>
      <OthersUsers currentUserId={params.userId} />
    </>
  );
}
