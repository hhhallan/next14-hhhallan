"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { GithubIcon, LinkIcon } from "lucide-react";
import { Project } from "@/types/projects";
import { useState } from "react";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const imageUrl = project.attributes?.image?.data?.attributes?.url
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${project.attributes.image.data.attributes.url}`
    : null;

  const links = [
    ...(project.github
      ? [
          {
            icon: <GithubIcon className="h-4 w-4" />,
            type: "GitHub",
            href: project.github,
          },
        ]
      : []),
    ...(project.website
      ? [
          {
            icon: <LinkIcon className="h-4 w-4" />,
            type: "Website",
            href: project.website,
          },
        ]
      : []),
  ];

  return (
    <Card
      className={
        "flex h-full flex-col overflow-hidden border transition-all duration-300 ease-out hover:shadow-lg"
      }
    >
      <Link
        href={project.website || "#"}
        className={cn("block cursor-pointer", className)}
        target="_blank"
      >
        {imageUrl ? (
          <ProgressiveImage
            src={imageUrl}
            alt={project.name}
            className="h-40 w-full object-cover object-center"
            width={400}
            height={160}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="h-40 w-full bg-muted/10 flex items-center justify-center">
            <span className="text-muted-foreground text-sm">
              {project.name}
            </span>
          </div>
        )}
      </Link>

      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{project.name}</CardTitle>
          <time className="font-sans text-xs">{project.type}</time>

          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {project.description}
          </Markdown>
        </div>
      </CardHeader>

      <CardContent className="mt-auto flex flex-col px-2">
        {project.technos && project.technos.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {project.technos.map((techno) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={techno}
              >
                {techno}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links.map((link, idx) => (
              <Link href={link.href} key={idx} target="_blank">
                <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

function ProgressiveImage({
  src,
  alt,
  ...props
}: {
  src: string;
  alt: string;
  [key: string]: any;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-pulse bg-gray-200 h-full w-full" />
        </div>
      )}
      <Image
        {...props}
        src={src}
        alt={alt}
        onLoadingComplete={() => setIsLoading(false)}
        className="h-40 w-full overflow-hidden object-cover object-top"
      />
    </div>
  );
}
