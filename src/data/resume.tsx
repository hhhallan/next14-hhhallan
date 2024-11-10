import { Icons } from "@/components/icons";

export const DATA = {
  name: "hhhallan | Développeur web & architecte d'espaces de travail Notion",
  initials: "AL",
  url: "https://hhhallan.fr",
  location: "Rouen, France",
  locationLink: "https://www.google.com/maps/place/rouen",
  description:
    "Développeur web & architecte d'espaces de travail Notion freelance en France spécialisé dans la création et refonte de sites web, et également dans la création et l'optimisation d'espaces de travail sur Notion",
  summary:
    "Après avoir plongé dans le monde du développement web avec un [Bachelor](https://www.needfor-school.com/bachelor-developpeur-web/) en poche, j’ai décidé de m’aventurer hors de ma zone de confort. Depuis, je jongle entre la tech et d'autres projets qui n'ont parfois rien à voir, mais qui me passionnent tout autant. Chaque jour est une nouvelle occasion d'explorer, de créer, et de trouver cet équilibre parfait entre code et créativité.",
  keywords: [
    // Mots-clés principaux
    "Développeur web freelance",
    "Développeur NextJS freelance",
    "Développeur Typescript freelance",
    "Développeur Tailwind CSS",
    "Shadcn freelance",
    "Freelance développeur web Elbeuf",
    "Freelance développeur web Rouen",
    "Développeur web Normandie",
    "Développeur web France",
    "Portfolio développeur web freelance",
    "Architecte d'espaces de travail Notion",
    "Création d'espace Notion freelance",
    "Notion expert freelance",
    "Architecte Notion freelance",
    "Freelance Notion Normandie",

    // Variantes et autres mots-clés secondaires
    "Allan",
    "Allan Leblond",
    "hhhallan",
    "hallan",
    "Leblond",
    "Allan développeur web freelance",
    "Hallan développeur web",
    "HHHallan développeur web",
    "Création de site web NextJS",
    "Développement frontend NextJS",
    "Développement frontend Tailwind",
    "Site web responsive avec Tailwind",
    "Solutions Notion pour entreprises",
    "Organisation Notion pour professionnels",
    "Notion workspace architecture",
    "Développeur web en Normandie",
    "Conception de sites web Rouen",
    "Développeur web à Elbeuf",
    "Freelance développement web en France",
    "Expert en gestion d'espace Notion",
    "Développeur web freelance Elbeuf",

    // Mots-clés de localisation
    "Développeur web à Elbeuf",
    "Développeur web Rouen",
    "Freelance web en Normandie",
    "Développeur freelance à Rouen",
    "Services de développement web à Elbeuf",
    "Agence de développement web Rouen",
    "Développeur web Normandie France",
    "Expert développement web Rouen",
    "Freelance web Elbeuf Normandie",
    "Web design Rouen Normandie",

    // Mots-clés longue traîne (SEO spécifique)
    "Freelance développeur web NextJS en Normandie",
    "Création de sites web professionnels à Elbeuf",
    "Expert NextJS, Typescript et Tailwind à Rouen",
    "Services Notion freelance pour entreprises à Rouen",
    "Conception de dashboard Notion pour freelances",
    "Développeur freelance utilisant NextJS, Tailwind et Shadcn",
    "Architecte Notion freelance pour entreprises",
    "Développeur web spécialisé en NextJS Rouen",
    "Notion workspace design pour équipes",
    "Création de sites web avec NextJS et Tailwind Rouen",
  ],
  contact: {
    text: "Pour me contacter vous pouvez m'envoyer un [mail](mailto:hello@hhhallan.fr?subject=Contact) ou me retrouvez sur [Linkedin](https://www.linkedin.com/in/allan-leblond-4ab302201/).",
    email: "hello@hhhallan.fr",
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
  project_section: {
    tag: "Projets",
    title: "Dernières réalisations",
    description: "voici quelques uns de mes projets favoris",
  },
  projects: [
    {
      title: "Qualisse",
      href: "https://qualissee.vercel.app/",
      dates: "Site web",
      active: true,
      description:
        "**Qualisse** est une entreprise de consulting naissante, offrant des services spécialisés pour optimiser les processus de développement et améliorer l'efficacité des équipes techniques.",
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
      dates: "Refonte de l'interface",
      active: true,
      description:
        "Refonte fictive de **AllBeer** avec un design moderne et des fonctionnalités améliorées pour offrir une meilleure expérience utilisateur.",
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
    {
      title: "Budokenkyudo",
      href: "https://budokenkyudo.vercel.app/",
      dates: "Site web",
      active: true,
      description: "Site réalisé pour l'association du **Budokenkyudo**.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://budokenkyudo.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/placeholder.svg",
      video: "",
    },
  ],
} as const;
