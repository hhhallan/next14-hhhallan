import SparklesText from "@/components/magicui/sparkles-text";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { getHeroSection } from "@/services/api";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Hero = async () => {
  const { data: hero } = await getHeroSection();

  const commonButtonClasses = cn(
    "gap-2 whitespace-pre md:flex",
    "group relative gap-1 overflow-hidden text-base font-semibold tracking-tighter",
    "transform-gpu transition-all duration-300 ease-out"
  );

  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex flex-1 flex-col space-y-1.5">
            <h1 className="text-3xl tracking-tighter sm:text-5xl">
              {hero.introduction}
              <SparklesText className="text-5xl sm:text-7xl" text="hhhallan" />
            </h1>
            <p className="max-w-[600px] md:text-xl">{hero.title}</p>
          </div>
          <div className="relative mx-auto h-full w-[250px] sm:w-[300px]">
            <Image
              alt="c'est moi en mode cartoon vintage"
              src="/cartoon.svg"
              width={1000}
              height={1000}
              priority
              className="h-auto w-full scale-110 sm:scale-125"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          {hero.buttons.map((button) => (
            <Link
              key={button.id}
              href={button.link}
              className={cn(
                buttonVariants({
                  size: "lg",
                  variant:
                    button.label === "projects" ? "default" : "secondary",
                }),
                "gap-2 whitespace-pre md:flex",
                "group relative gap-1 overflow-hidden text-base font-semibold tracking-tighter",
                button.label === "projects"
                  ? "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-2 bg-[#A07CFE] hover:bg-[#8f64fc] hover:ring-[#8f64fc] dark:bg-foreground dark:ring-foreground"
                  : ""
              )}
            >
              {button.title}
              <ChevronRight className="h-4 w-4 translate-x-0 transform transition-all duration-300 ease-out group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
