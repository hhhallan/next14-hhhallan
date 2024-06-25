import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";

export const Education = () => {
  return (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold">Scolarité</h2>
        {DATA.education.map((education, id) => (
          <ResumeCard
            key={education.degree}
            href={education.href}
            logoUrl={education.logoUrl}
            altText={education.school}
            title={education.school}
            period={`${education.start} - ${education.end}`}
            description={education.degree}
          />
        ))}
      </div>
    </section>
  );
};
