import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="text-center space-y-3 mt-45 px-4">
      <h1 className="text-5xl font-bold md:text-8xl">
        FPL mastery
        <span className="block text-primary">unlocked</span>
      </h1>
      <p className="text-muted-foreground md:text-2xl line-clamp-2">
        Build your dream team, optimize transfers, and dominate your league
      </p>
      <Link
        href="/signin"
        className={cn(buttonVariants({ size: "lg" }), "mt-6")}
      >
        Get Started
      </Link>
    </div>
  );
}
