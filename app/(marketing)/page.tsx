import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Features from "./_components/features";

export default async function Home() {
  return (
    <div>
      {" "}
      <section className="pt-10 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-[#933dff]/10 to-[#31d684]/10 border border-[#933dff]/20">
            <span className="w-2 h-2 rounded-full bg-[#31d684] animate-pulse"></span>
            <span className="text-xs md:text-sm font-medium text-foreground/80">
              Introducing FPLpal - Your FPL Game Changer
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-balance leading-tight">
            Win Your Mini League
            <br />
            <span className="bg-linear-to-r from-[#933dff] to-[#31d684] bg-clip-text text-transparent">
              With Real-Time Data
            </span>
          </h1>
          <p className="text-muted-foreground ext-lg md:text-xl max-w-2xl mx-auto text-balance">
            Get real-time player price changes, compare two players based on
            stats, price and upcoming fixtures. Make data-driven decisions and
            dominate your mini-league.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/signin"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-linear-to-r from-[#933dff] to-[#31d684] hover:shadow-lg hover:shadow-[#933dff]/30 text-white border-0"
              )}
            >
              Start Playing Now <ArrowRight className="size-4" />
            </Link>
            <Link
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-2 text-base bg-transparent"
              )}
              href={"https://www.youtube.com"}
              target="_blank"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto">
        <Features />
      </section>
    </div>
  );
}
