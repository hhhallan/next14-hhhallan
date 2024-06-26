import { Icons } from "@/components/icons";

// export const DATA = {
//   name: "hhhallan",
//   initials: "AL",
//   url: "https://hhhallan.vercel.app/",
//   location: "Rouen, France",
//   locationLink: "https://www.google.com/maps/place/rouen",
//   description:
//     "Développeur et animateur, à la recherche constante de nouvelles expériences.",
//   summary:
//     "À la fin de mon [Bachelor en développement web](https://www.needfor-school.com/bachelor-developpeur-web/) (dans lequel j'ai obtenu les titres de *Concepteur développeur d'applications* et *Chargé de projets en systèmes informatiques appliqués*) j'ai voulu prendre une pause. J'avais besoin de plus de contacts humains dans ma vie et j'ai choisi de me lancer dans l'animation. Mon objectif ? Trouver le bon équilibre entre les deux, et continuer à lancer des projets perso ou pro.",

//   contact: {
//     text: "Pour me contacter vous pouvez m'envoyer un [mail](mailto:allanstm76+work@gmail.com?subject=Contact) ou me retrouvez sur [Linkedin](https://www.linkedin.com/in/allan-leblond-4ab302201/).",
//     email: "allanstm76+work@gmail.com",
//     tel: "+33695627404",
//     social: {
//       GitHub: {
//         url: "https://github.com/hhhallan",
//         icon: Icons.github,
//       },
//       LinkedIn: {
//         url: "https://www.linkedin.com/in/allan-leblond-4ab302201/",
//         icon: Icons.linkedin,
//       },
//     },
//   },

//   work: [
//     {
//       company: "Anim'Elbeuf",
//       href: "https://animelbeuf.fr/",
//       badges: [],
//       location: "Elbeuf",
//       title: "Animateur",
//       logoUrl: "/work/anim-elbeuf.png",
//       start: "Sep 2023",
//       end: "Sep 2024",
//       description:
//         "Animateur avec les enfants dans le périscolaire et dans les centres de loisirs. J'ai également passé mon BAFA.",
//     },
//     {
//       company: "BlueSoft Group",
//       href: "https://www.bluesoft-group.com/",
//       badges: [],
//       location: "Rouen",
//       title: "Développeur web",
//       logoUrl: "/work/bsg.png",
//       start: "Avr 2022",
//       end: "Juil 2023",
//       description:
//         "Développement web sur le projet Sergic. Utilisation de la méthodologie agile, développement en Ruby & RubyOnRails.",
//     },
//     {
//       company: "Vidis",
//       badges: [],
//       href: "https://marcmoileu.fr/index.php",
//       location: "Rouen",
//       title: "Développeur web et mobile",
//       logoUrl: "",
//       start: "Oct 2021",
//       end: "Avr 2022",
//       description:
//         "Développement d'une application mobile avec Ionic et Angular sur le projet Il s'appelle Reviens.",
//     },
//     {
//       company: "Internetrama",
//       badges: [],
//       href: "https://www.asuwish.fr/structures/internetrama",
//       location: "Rouen",
//       title: "Développeur web",
//       logoUrl: "/work/internetrama.svg",
//       start: "Avr 2021",
//       end: "Jul 2021",
//       description:
//         "Développement web sur Wordpress et refonte pour le projet SSI Système en utilisant SASS.",
//     },
//   ],
//   education: [
//     {
//       school: "Need For School",
//       href: "https://www.needfor-school.com/",
//       degree:
//         "Bachelor concepteur développeur d'applications - Chargé de projets en systèmes informatiques appliqués - TOEIC",
//       logoUrl: "/education/nfs.png",
//       start: "2020",
//       end: "2023",
//     },
//     {
//       school: "Université de Rouen",
//       href: "https://www.univ-rouen.fr/",
//       degree: "L1 de Psychologie",
//       logoUrl: "",
//       start: "2019",
//       end: "2020",
//     },
//     {
//       school: "Lycée André Maurois",
//       href: "https://maurois-elbeuf.lycee.ac-normandie.fr/",
//       degree: "Baccalauréat ES",
//       logoUrl: "",
//       start: "2016",
//       end: "2019",
//     },
//   ],
//   project_section: {
//     tag: "Mes projets",
//     title: "Mes dernières réalisations",
//     description:
//       "Ici vous pouvez retrouver les derniers projets que j'ai réalisé durant ma pause !",
//   },
//   projects: [
//     {
//       title: "Qualisse",
//       href: "https://qualissee.vercel.app/",
//       dates: "Mai 2024 - En cours",
//       active: true,
//       description:
//         "Qualisse est une entreprise de consulting naissante, offrant des services spécialisés pour optimiser les processus de développement et améliorer l'efficacité des équipes techniques.",
//       technologies: [
//         "Next.js",
//         "Typescript",
//         "TailwindCSS",
//         "Shadcn UI",
//         "Magic UI",
//       ],
//       links: [
//         {
//           type: "Website",
//           href: "https://qualissee.vercel.app/",
//           icon: <Icons.globe className="size-3" />,
//         },
//       ],
//       image: "/qualissee.png",
//       video: "",
//     },
//     {
//       title: "AllBeer",
//       href: "https://allbeer.vercel.app/",
//       dates: "Avril 2024",
//       active: true,
//       description:
//         "Refonte complète de **AllBeer** avec un design moderne et des fonctionnalités améliorées pour offrir une meilleure expérience utilisateur.",
//       technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
//       links: [
//         {
//           type: "Website",
//           href: "https://allbeer.vercel.app/",
//           icon: <Icons.globe className="size-3" />,
//         },
//         {
//           type: "Source",
//           href: "https://github.com/hhhallan/allbeer",
//           icon: <Icons.github className="size-3" />,
//         },
//       ],
//       image: "/allbeer.png",
//       video: "",
//     },
//     // {
//     //   title: "Magic UI",
//     //   href: "https://magicui.design",
//     //   dates: "June 2023 - Present",
//     //   active: true,
//     //   description:
//     //     "Designed, developed and sold animated UI components for developers.",
//     //   technologies: [
//     //     "Next.js",
//     //     "Typescript",
//     //     "PostgreSQL",
//     //     "Prisma",
//     //     "TailwindCSS",
//     //     "Stripe",
//     //     "Shadcn UI",
//     //     "Magic UI",
//     //   ],
//     //   links: [
//     //     {
//     //       type: "Website",
//     //       href: "https://magicui.design",
//     //       icon: <Icons.globe className="size-3" />,
//     //     },
//     //     {
//     //       type: "Source",
//     //       href: "https://github.com/magicuidesign/magicui",
//     //       icon: <Icons.github className="size-3" />,
//     //     },
//     //   ],
//     //   image: "",
//     //   video: "https://cdn.magicui.design/bento-grid.mp4",
//     // },
//   ],
// } as const;

export const DATA = {
  name: "hhhallan",
  initials: "AL",
  url: "https://hhhallan.vercel.app/",
  location: "Rouen, France",
  locationLink: "https://www.google.com/maps/place/rouen",
  description:
    "Développeur et animateur, à la recherche constante de nouvelles expériences.",
  summary:
    "À la fin de mon [Bachelor en développement web](https://www.needfor-school.com/bachelor-developpeur-web/) (dans lequel j'ai obtenu les titres de *Concepteur développeur d'applications* et *Chargé de projets en systèmes informatiques appliqués*) j'ai voulu prendre une pause. J'avais besoin de plus de contacts humains dans ma vie et j'ai choisi de me lancer dans l'animation. J'essaye de trouver le bon équilibre entre les deux, et continuer à lancer des projets perso ou pro.",

  contact: {
    text: "Pour me contacter vous pouvez m'envoyer un [mail](mailto:allanstm76+work@gmail.com?subject=Contact) ou me retrouvez sur [Linkedin](https://www.linkedin.com/in/allan-leblond-4ab302201/).",
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
      description: `
Animateur avec les enfants dans le périscolaire et dans les centres de loisirs.
  
- Organisation d'activités ludiques
- Gestion de groupes d'enfants
- Certification BAFA
`,
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
      description: `
Maintenance d'un projet développé en React et Ruby.

**Projet : [Sergic](https://sergic.com)**
- Méthodologie Agile
- Travail d'équipe
- Gestion de ticket front & Ruby (ActiveRecord)
`,
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
      description: `
Développement d'une application mobile avec Ionic et Angular sur le projet Il s'appelle Reviens.

**Projet : Il s'appelle Reviens**
- Développement mobile avec Ionic
- Utilisation d'Angular
- Autonomie
`,
    },
    {
      company: "Internetrama",
      badges: [],
      href: "https://www.asuwish.fr/structures/internetrama",
      location: "Rouen",
      title: "Développeur web",
      logoUrl: "/work/internetrama.svg",
      start: "Avr 2021",
      end: "Jul 2021",
      description: `
Développement web sur Wordpress et refonte pour le projet SSI Système en utilisant SASS.

**Projet : SSI Système**
- Développement sous Wordpress
- Utilisation de SASS
- Création d'un plugin WP
`,
    },
  ],
  education: [
    {
      school: "Need For School",
      href: "https://www.needfor-school.com/",
      logoUrl: "/education/nfs.png",
      start: "2020",
      end: "2023",
      degree: `
Pendant mon bachelor, j'ai appris les bases du développement web lors de projets modulaire et acquis beaucoup de compétences transverses grâce aux différents cours (UX/UI, Prise de parole, ..).

*Ce que ça m'a apporté :*
- *Compétences en développement web et mobile*
- *Gestion de projets informatiques*

**Titres obtenus :**
- Concepteur développeur d'applications
- Chargé de projets en systèmes informatiques appliqués
- Certification TOEIC (825)
`,
    },
    {
      school: "Université de Rouen",
      href: "https://www.univ-rouen.fr/",
      logoUrl: "",
      start: "2019",
      end: "2020",
      degree: `
Une année en psychologie m'a permis de mieux comprendre le comportement humain, une compétence utile dans de nombreux domaines.

*Ce que ça m'a apporté :*
- *Introduction à la psychologie*
- *Compréhension des comportements humains*
- *Développement de l'empathie*
`,
    },
    {
      school: "Lycée André Maurois",
      href: "https://maurois-elbeuf.lycee.ac-normandie.fr/",
      logoUrl: "",
      start: "2016",
      end: "2019",
      degree: `
J'ai obtenu mon baccalauréat en sciences économiques et sociales (spécialité mathématiques), ce qui m'a donné une bonne base en analyse économique et sociale.

**Titre obtenu :**
- Baccalauréat ES
`,
    },
  ],
  project_section: {
    tag: "Mes projets",
    title: "Mes dernières réalisations",
    description:
      "J'ai encore pleins d'idées de projets en tête pour la suite ! N'hésitez pas à me contacter si vous avez aussi des idées.",
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
  ],
} as const;
