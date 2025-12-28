import Link from "next/link";
import { Logo } from "../_components/logo";
import { Bell } from "lucide-react";
import UserMenuSimple from "@/components/user-dropdown-01";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const navLinks = [
  { id: 1, name: "Home", href: "/dashboard" },
  { id: 2, name: "Compare", href: "/dashboard/compare" },
  { id: 3, name: "Scout", href: "/dashboard/scout" },
];

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="px-2 md:px-0 max-w-7xl mx-auto">
      <nav className="flex justify-between items-center py-6">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className="flex gap-4 justify-center items-center">
          {navLinks.map((link) => (
            <Link
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "text-[16px] hidden md:flex"
              )}
              key={link.id}
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-4 justify-center items-center">
          <Link
            className={cn(
              buttonVariants({ variant: "outline" }),
              "hidden md:flex"
            )}
            href={"/dashboard/notifications"}
          >
            <Bell size={20} />
          </Link>
          {session && <UserMenuSimple user={session.user} />}
        </div>
      </nav>
      {children}
    </div>
  );
}
