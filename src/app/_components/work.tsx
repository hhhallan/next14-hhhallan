import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";

export const Work = () => {
  return (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold">Experiences</h2>
        {DATA.work.map((work, id) => (
          <ResumeCard
            key={work.title}
            logoUrl={work.logoUrl}
            altText={work.company}
            title={work.company}
            subtitle={work.title}
            href={work.href}
            badges={work.badges}
            period={`${work.start} - ${work.end ?? "Present"}`}
            description={work.description}
          />
        ))}
      </div>
    </section>
  );
};
