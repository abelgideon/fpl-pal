import { buttonVariants } from "@/components/ui/button";
import ModeToggle from "@/components/mode-toggle";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/app/_components/logo";

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
            Sign in
          </Link>
          <Link href="/signin" className={buttonVariants()}>
            Sign up
          </Link>
        </>
      </div>
    </nav>
  );
}
