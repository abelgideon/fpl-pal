import Link from "next/link";
import { Logo } from "../_components/logo";

const navLinks = [
  { id: 1, name: "Home", href: "/dashboard" },
  { id: 2, name: "Compare", href: "/dashboard/compare" },
  { id: 3, name: "Scout", href: "/dashboard/scout" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="flex justify-between items-center py-4">
        <Logo />
        <div className="flex gap-4">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
      {children}
    </>
  );
}
