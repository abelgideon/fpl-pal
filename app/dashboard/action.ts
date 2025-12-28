"use server";

import { db } from "@/db/drizzle";
import { user } from "@/db/schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { eq } from "drizzle-orm";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateTeamID(prevState: any, formData: FormData) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return {
      error: "Unauthorized",
    };
  }

  const teamID = formData.get("teamID");

  if (!teamID) {
    return {
      error: "Team ID is required",
    };
  }

  if (isNaN(Number(teamID))) {
    return {
      error: "Team ID must be a number",
    };
  }
  try {
    await db
      .update(user)
      .set({ teamID: Number(teamID) })
      .where(eq(user.id, session.user.id));
    revalidatePath("/dashboard");
  } catch (e) {
    console.error(e);
    return {
      error: "Failed to update Team ID",
    };
  }
  return redirect("/dashboard");
}
