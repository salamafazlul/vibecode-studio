import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className=" z-20 flex flex-col items-center justify-start min-h-screen py-2 mt-10">
      <div className="flex flex-col justify-center items-center my-5">
        <Image src={"/hero.svg"} alt="Hero-Section" height={400} width={400} />

        <h1 className=" z-20 text-6xl mt-5 font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#06aacb] via-blue-500 to-pink-500 dark:from-[#00d4ff]dark:via-blue-500 dark:to-pink-500 tracking-tight leading-[1.3] ">
          The Future Codes Here
        </h1>
      </div>

      <p className="mt-2 text-lg text-center text-gray-600 dark:text-gray-400 px-5 py-10 max-w-2xl">
        VibeCode Studio is a next-generation code editor that brings intelligence, speed, and simplicity to your browser. Built for creators and learners alike, it lets you write, debug, and run code seamlessly so you can focus on building the future, not fighting the editor.
      </p>
      <Link href={"/dashboard"}>
        <Button variant={"brand"} className="mb-4" size={"lg"}>
          Get Started
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Button>
      </Link>
    </div>
  );
}
