import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});

export function Logo() {
  return (
    <p className={`${anton.className} text-3xl`}>
      <span className="text-[#933dff]">FPL</span>
      <span className="text-[#31d684]">pal</span>
    </p>
  );
}
