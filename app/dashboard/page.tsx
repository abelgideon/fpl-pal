import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { TeamIdForm } from "./_components/team-id-form";
import { SignOutButton } from "./_components/sign-out-button";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    return redirect("/")
  }

  if (!session.user.teamID) {
    return <TeamIdForm />
  }

  return (
    <div>
      <h1 className="text-5xl mb-5">Welcome to FPLpal</h1>
      <p>Hello {session.user.name}</p>
      <p>This is your email: {session.user.email}</p>
      <SignOutButton />
    </div>
  );
}
