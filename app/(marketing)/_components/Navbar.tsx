import { buttonVariants } from "@/components/ui/button";
import ModeToggle from "@/components/mode-toggle";
import Link from "next/link";
import { Logo } from "@/app/_components/logo";
import { cn } from "@/lib/utils";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function Navbar() {
  const session = await auth.api.getSession({
    headers: await headers()

  });
  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
      <Logo />
      <div className="md:flex md:gap-4 hidden">
        <ModeToggle />
        {!session && (<>
          <Link
            href="/signin"
            className={buttonVariants({ variant: "outline" })}
          >
            Log in
          </Link>
          <Link
            href="/signin"
            className={cn(
              buttonVariants(),
              "bg-linear-to-r from-[#933dff] to-[#31d684] hover:shadow-lg hover:shadow-[#933dff]/30 text-white border-0"
            )}
          >
            Get Started Free
          </Link>
        </>)}
      </div>
    </nav>
  );
}
