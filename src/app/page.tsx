import { Projects } from "./_components/projects";
import { About } from "./_components/about";
import { Hero } from "./_components/hero";
import { Contact } from "./_components/contact";

const RootPage = () => {
  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10 pb-[75px]">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default RootPage;
