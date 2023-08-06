import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";

export default async function Home() {
  const fetchedUser = await getServerSession(authOptions);
  const userProfile = fetchedUser?.user;

  if (!userProfile) {
    return redirect("/login");
  } else {
    return redirect("/profile");
  }
}
