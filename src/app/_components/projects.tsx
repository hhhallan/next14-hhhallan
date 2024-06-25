import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

export const Projects = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
      <div className="space-y-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
              {DATA.project_section.tag}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {DATA.project_section.title}
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {DATA.project_section.description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 md:grid-cols-2">
          {DATA.projects.map((project, id) => (
            <ProjectCard
              href={project.href}
              key={project.title}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
