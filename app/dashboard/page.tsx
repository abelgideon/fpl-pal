"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const session = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };

  return (
    <div>
      <h1 className="text-5xl mb-5">Welcome to FPLpal</h1>
      <p>Hello {session.data?.user.name}</p>
      <p>This is your email: {session.data?.user.email}</p>
      <Button onClick={handleSignOut} className="mt-5">
        Logout
      </Button>
    </div>
  );
}
