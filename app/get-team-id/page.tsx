import Image from "next/image";
import img_1 from "@/public/images/img-1.png";
import img_2 from "@/public/images/img-2.png";
import img_3 from "@/public/images/img-3.png";

export default function GetTeamIDPage() {
  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-3xl md:text-6xl font-bold text-center pb-15">
        How to get your Team ID?
      </h1>
      <div className="space-y-7">
        <p className="text-xl md:text-2xl">
          1. Go to the offical{" "}
          <a
            href="https://fantasy.premierleague.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Fantasy Premier League
          </a>{" "}
          page.
        </p>
        <Image
          src={img_1}
          alt="FPL site home page"
          width={1000}
          height={1000}
        />
        <p className="text-xl md:text-2xl">
          2. Scroll down till you see the Gameweek History button.
        </p>
        <Image
          src={img_2}
          alt="FPL site home page scrolled down"
          width={1000}
          height={1000}
        />
        <p className="text-xl md:text-2xl">
          3. Click on the Gameweek History button and you will find your Team ID
          in the URL.
        </p>
        <Image
          src={img_3}
          alt="FPL site gameweek history page url"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
