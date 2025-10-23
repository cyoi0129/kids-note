import UserComponent from "@/components/user/User";
import { UserProvider } from "@/services/user/provider";
import { cookies } from "next/headers";

async function getServerCookie(name: string) {
  const cookieStore = await cookies();
  return cookieStore.get(name)?.value;
}

export default async function Update() {
  const user_id = await getServerCookie("user_id");
  if (!user_id) return;
  const userId = Number(user_id);
  return (
    <main>
      <UserProvider id={userId}>
        <UserComponent />
      </UserProvider>
    </main>
  );
}
