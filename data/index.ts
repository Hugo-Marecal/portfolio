export const navItems = [
  { name: "Accueil", link: "#accueil" },
  { name: "About", link: "#about" },
  { name: "Projets", link: "#projets" },
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
    title: "Flexible en ce qui concerne les communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 lg:row-span-4 md:row-span-4",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 3,
  //   title: "Ma stack tech",
  //   description: "J'essaie constamment de m'améliorer",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-center",
  //   img: "",
  //   spareImg: "",
  // },
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
    title: "Voulez-vous démarrer un projet ensemble ?",
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
    des: "Portfolio présentant mes différents projets",
    img: "/portfolio.svg",
    iconLists: ["/next.svg", "/three.svg", "/ts.svg"],
    link: "https://github.com/Hugo-Marecal/portfolio",
  },
];
