export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projets", link: "#projets" },
  { name: "Expériences", link: "#experiences" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Je donne la priorité à la collaboration avec les clients, en favorisant une communication ouverte",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Mobile et adaptable selon la localisation du client",
    description: "",
    className: "lg:col-span-2 md:col-span-3 lg:row-span-4 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionné de technologie et de développement",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Stack Technique",
    description: "J'essaie constamment de m'améliorer",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "h-full md:w-7/12 w-56 float-right",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/myStack.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Vous souhaitez collaborer sur un projet ?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "GestInvest",
    des: "GestInvest vous offre une plateforme complète pour suivre vos actifs et analyser leur performance.",
    img: "/gestinvest.svg",
    iconLists: ["/react.svg", "/tailwind.svg", "/boot.svg", "/ts.svg"],
    link: "https://gest-invest.vercel.app/",
  },
  {
    id: 2,
    title: "Mon Portfolio",
    des: "Portfolio présentant mes différents projets et mon expérience.",
    img: "/portfolio2.png",
    iconLists: ["/next.svg", "/three.svg", "/ts.svg"],
    link: "https://github.com/Hugo-Marecal/portfolio",
  },
];

export const socialMedia = [
  {
    id: 1,
    href: "https://github.com/Hugo-Marecal",
    img: "/git.svg",
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/hugo-marecal-developpeur-web",
    img: "/link.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Backend Développeur GestInvest",
    desc: "Conception et implémentation complète d'une architecture backend robuste : analyse des besoins, modélisation de la base de données (MCD/MLD), mise en place d'une API RESTful sécurisée. Développement des fonctionnalités métier, gestion avancée de l'authentification avec token JWT, mise en place de middleware de sécurité et validation des données.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Développement Portfolio",
    desc: "Création d'un portfolio professionnel moderne avec Next.js, en suivant une approche de développement structurée basée sur une maquette Figma. Implémentation d'une interface utilisateur responsive et interactive, optimisation des performances avec le rendu côté serveur (SSR), intégration des meilleures pratiques SEO.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];
