import { Icons } from "@/components/icons";

export const DATA = {
  name: "hhhallan",
  initials: "AL",
  url: "http://localhost:3000/",
  location: "Rouen, France",
  locationLink: "https://www.google.com/maps/place/rouen",
  description:
    "Développeur et animateur, à la recherche constante de nouvelles expériences.",
  summary:
    "moi c'est allan, j'ai 22 ans et je suis diplômé en développement web. Après avoir réalisé que rester derrière un ordinateur manquait d'interaction sociale, j'ai pris une pause d'un an pour travailler comme animateur tout en continuant à développer à côté.",

  contact: {
    text: "ceci est u ntexte de contact, retrouvez-moi sur [Linkedin](https://www.linkedin.com/in/allan-leblond-4ab302201/)",
    email: "allanstm76+work@gmail.com",
    tel: "+33695627404",
    social: {
      GitHub: {
        url: "https://github.com/hhhallan",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/allan-leblond-4ab302201/",
        icon: Icons.linkedin,
      },
    },
  },

  work: [
    {
      company: "Anim'Elbeuf",
      href: "https://animelbeuf.fr/",
      badges: [],
      location: "Elbeuf",
      title: "Animateur",
      logoUrl: "/work/anim-elbeuf.png",
      start: "Sep 2023",
      end: "Sep 2024",
      description:
        "Animateur avec les enfants dans le périscolaire et dans les centres de loisirs. J'ai également passé mon BAFA.",
    },
    {
      company: "BlueSoft Group",
      href: "https://www.bluesoft-group.com/",
      badges: [],
      location: "Rouen",
      title: "Développeur web",
      logoUrl: "/work/bsg.png",
      start: "Avr 2022",
      end: "Juil 2023",
      description:
        "Développement web sur le projet [Sergic](https://www.sergic.com/). Utilisation de la méthodologie agile, développement en Ruby & RubyOnRails.",
    },
    {
      company: "Vidis",
      badges: [],
      href: "https://marcmoileu.fr/index.php",
      location: "Rouen",
      title: "Développeur web et mobile",
      logoUrl: "",
      start: "Oct 2021",
      end: "Avr 2022",
      description:
        "Développement d'une application mobile avec Ionic et Angular sur le projet **Il s'appelle Reviens**.",
    },
    {
      company: "Internetrama",
      badges: [],
      href: "https://www.asuwish.fr/structures/internetrama",
      location: "Rouen",
      title: "Développeur web",
      logoUrl: "/work/internetrama.svg",
      start: "Apr 2021",
      end: "Jul 2021",
      description:
        "Développement web sur Wordpress et refonte pour le projet **SSI Système** en utilisant SASS.",
    },
  ],
  education: [
    {
      school: "Need For School",
      href: "https://www.needfor-school.com/",
      degree:
        "Concepteur développeur d'applications && Chargé de projets en systèmes informatiques appliqués",
      logoUrl: "/education/nfs.png",
      start: "2020",
      end: "2023",
    },
    {
      school: "Université de Rouen",
      href: "https://www.univ-rouen.fr/",
      degree: "L1 de Psychologie",
      logoUrl: "",
      start: "2019",
      end: "2020",
    },
    {
      school: "Lycée André Maurois",
      href: "https://maurois-elbeuf.lycee.ac-normandie.fr/",
      degree: "Baccalauréat ES",
      logoUrl: "",
      start: "2016",
      end: "2019",
    },
  ],
  project_section: {
    tag: "Mes projets",
    title: "Mes dernières réalisations",
    description: "description",
  },
  projects: [
    {
      title: "Qualisse",
      href: "https://qualissee.vercel.app/",
      dates: "Mai 2024 - En cours",
      active: true,
      description:
        "Qualisse est une entreprise de consulting naissante, offrant des services spécialisés pour optimiser les processus de développement et améliorer l'efficacité des équipes techniques.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://qualissee.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/qualissee.png",
      video: "",
    },
    {
      title: "AllBeer",
      href: "https://allbeer.vercel.app/",
      dates: "Avril 2024",
      active: true,
      description:
        "Refonte complète de **AllBeer** avec un design moderne et des fonctionnalités améliorées pour offrir une meilleure expérience utilisateur.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://allbeer.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hhhallan/allbeer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/allbeer.png",
      video: "",
    },
    // {
    //   title: "Magic UI",
    //   href: "https://magicui.design",
    //   dates: "June 2023 - Present",
    //   active: true,
    //   description:
    //     "Designed, developed and sold animated UI components for developers.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://magicui.design",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/magicuidesign/magicui",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.magicui.design/bento-grid.mp4",
    // },
  ],
} as const;
