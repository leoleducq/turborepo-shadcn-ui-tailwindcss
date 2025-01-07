type Project = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  image: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "identite-visuelle",
    title: "Identité visuelle Théatre Saint Gervais",
    subtitle: "Théâtre Saint Gervais",
    date: "2023-12-01",
    image: "/identite-visuelle.png",
    description:
      "Développement complet de l'identité visuelle pour le Théâtre Saint Gervais. Ce projet a impliqué la création d'une charte graphique cohérente, incluant logo, typographie, palette de couleurs et supports de communication, reflétant l'essence culturelle et artistique du théâtre.",
  },
  {
    id: 2,
    slug: "design-editorial",
    title: "Design éditorial",
    subtitle: "Clemence",
    date: "2023-11-15",
    image: "/clemence.png",
    description:
      "Conception et réalisation d'un projet éditorial mettant en valeur un contenu complexe à travers une mise en page innovante. Le design privilégie la lisibilité tout en maintenant une esthétique contemporaine et engageante.",
  },
  {
    id: 3,
    slug: "overshoot",
    title: "Overshoot",
    subtitle: "L'Over Shoot",
    date: "2023-10-20",
    image: "/overshoot.png",
    description:
      "Projet créatif explorant le concept d'overshoot à travers une approche visuelle unique. Cette réalisation combine illustrations et éléments graphiques pour sensibiliser aux enjeux environnementaux actuels.",
  },
  {
    id: 4,
    slug: "3d",
    title: "3D",
    subtitle: "L'Over Shoot",
    date: "2023-09-05",
    image: "/3d.png",
    description:
      "Création d'univers visuels en trois dimensions, explorant les possibilités créatives de la modélisation 3D. Ce projet démontre la maîtrise des outils de conception 3D au service d'une vision artistique originale.",
  },
  {
    id: 5,
    slug: "manufacture",
    title: "Affiche Manufacture",
    subtitle: "Manufacture",
    date: "2023-08-12",
    image: "/manufacture.png",
    description:
      "Conception d'une affiche pour la Manufacture, alliant impact visuel et communication efficace. Le design joue avec la typographie et la composition pour créer une identité forte et mémorable.",
  },
  {
    id: 6,
    slug: "typographie",
    title: "Typographie",
    subtitle: "L'Over Shoot",
    date: "2023-07-22",
    image: "/typographie.jpg",
    description:
      "Exploration et création typographique, développant un caractère unique qui allie lisibilité et expressivité. Ce projet démontre une compréhension approfondie des principes typographiques et leur application créative.",
  },
  {
    id: 7,
    slug: "edition",
    title: "Édition",
    subtitle: "L'Over Shoot",
    date: "2023-07-22",
    image: "/edition.jpg",
    description:
      "Projet d'édition combinant contenu éditorial et design graphique. La mise en page, le choix des matériaux et la direction artistique s'unissent pour créer une expérience de lecture immersive.",
  },
  {
    id: 8,
    slug: "web",
    title: "Site Web",
    subtitle: "L'Over Shoot",
    date: "2023-07-22",
    image: "/web.jpg",
    description:
      "Conception et développement d'une interface web moderne et responsive. Ce projet met l'accent sur l'expérience utilisateur tout en maintenant une esthétique soignée et contemporaine.",
  },
  {
    id: 9,
    slug: "workshop",
    title: "Workshop",
    subtitle: "L'Over Shoot",
    date: "2023-07-22",
    image: "/workshop.jpg",
    description:
      "Conception d'un workshop interactive pour les artistes et designers. Le design met l'accent sur l'expérience utilisateur tout en maintenant une esthétique soignée et contemporaine.",
  },
];
