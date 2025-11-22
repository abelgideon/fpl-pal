import { buttonVariants } from "@/components/ui/button";
import ModeToggle from "@/components/mode-toggle";
import Link from "next/link";
import { Logo } from "@/app/_components/logo";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const navLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Features", href: "/features" },
  { id: 3, name: "Faq", href: "/faq" },
];

export async function Navbar() {
  return (
    <nav className="flex justify-between p-4">
      <div className="flex gap-10 justify-center items-center">
        <Logo />
        {navLinks.map((link) => (
          <Link className="hover:text-primary" key={link.id} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>

      <div className="md:flex md:gap-4 hidden">
        <ModeToggle />
        <>
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
        </>
      </div>
    </nav>
  );
}
