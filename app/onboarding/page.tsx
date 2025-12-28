import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { TeamIdForm } from "../dashboard/_components/team-id-form";

export default async function OnboardingPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/");
  }

  if (session.user.teamID) {
    return redirect("/dashboard");
  }

  return <TeamIdForm />;
}
