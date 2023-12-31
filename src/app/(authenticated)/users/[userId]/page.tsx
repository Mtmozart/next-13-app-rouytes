import type { Metadata } from "next";
import { getUserById } from "../services/get-user-by-id";
import OthersUsers from "../components/others-users";
import { getUsers } from "../services/get-users";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getUserById(params.id);

  return {
    title: "post.title",
    description: "post.title",
  };
}

export async function generateStaticParams() {
  const users = await getUsers();
  const usersIds = users.map((user: any) => ({
    userId: user.id.toString(),
  }));
  return usersIds;
}

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
      <div>{user.body}</div>

      <hr />
      <h3>Outros usuários</h3>
      <OthersUsers currentUserId={params.userId} />
    </>
  );
}
