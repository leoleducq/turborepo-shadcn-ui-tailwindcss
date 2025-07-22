type Project = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  image: string;
  description: string;
  images: string[];
  tableData: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "identite-visuelle",
    title: "Identité visuelle Théatre Saint Gervais",
    subtitle: "Théâtre Saint Gervais",
    date: "2023-12-01",
    image: "/projet1/2.jpg",
    description:
      "Développement complet de l'identité visuelle pour le Théâtre Saint Gervais. Ce projet a impliqué la création d'une charte graphique cohérente, incluant logo, typographie, palette de couleurs et supports de communication, reflétant l'essence culturelle et artistique du théâtre.",
    images: [],
    tableData: [
      "Identité visuelle",
      "2023",
      "Théâtre Saint Gervais",
      "",
      "Logo, charte, supports",
    ],
  },
  {
    id: 2,
    slug: "design-editorial",
    title: "Design éditorial",
    subtitle: "Imbert",
    date: "2023-11-15",
    image: "/projet2/1.jpg",
    description:
      "Conception et réalisation d'un projet éditorial mettant en valeur un contenu complexe à travers une mise en page innovante. Le design privilégie la lisibilité tout en maintenant une esthétique contemporaine et engageante.",
    images: [],
    tableData: ["Design éditorial", "2023", "Imbert", "", ""],
  },
  {
    id: 3,
    slug: "overshoot",
    title: "Overshoot",
    subtitle: "L'Over Shoot",
    date: "2023-10-20",
    image: "/projet3/1.jpg",
    description:
      "Projet créatif explorant le concept d'overshoot à travers une approche visuelle unique. Cette réalisation combine illustrations et éléments graphiques pour sensibiliser aux enjeux environnementaux actuels.",
    images: [],
    tableData: ["Overshoot", "2023", "", "Environnement", "Illustration"],
  },
  {
    id: 4,
    slug: "3d",
    title: "3D",
    subtitle: "Blender",
    date: "2023-09-05",
    image: "/projet4/1.jpg",
    description:
      "Création d'univers visuels en trois dimensions, explorant les possibilités créatives de la modélisation 3D. Ce projet démontre la maîtrise des outils de conception 3D au service d'une vision artistique originale.",
    images: [],
    tableData: ["3D", "2023", "Blender", "", "Modélisation"],
  },
  {
    id: 5,
    slug: "manufacture",
    title: "Affiche Manufacture",
    subtitle: "Manufacture",
    date: "2023-08-12",
    image: "/projet5/1.jpg",
    description:
      "Conception d'une affiche pour la Manufacture, alliant impact visuel et communication efficace. Le design joue avec la typographie et la composition pour créer une identité forte et mémorable.",
    images: [],
    tableData: ["Affiche", "2023", "Manufacture", "", "Typographie"],
  },
  {
    id: 6,
    slug: "typographie",
    title: "Typographie",
    subtitle: "Specimen",
    date: "2023-07-22",
    image: "/projet6/1.jpg",
    description:
      "Exploration et création typographique, développant un caractère unique qui allie lisibilité et expressivité. Ce projet démontre une compréhension approfondie des principes typographiques et leur application créative.",
    images: [],
    tableData: ["Typographie", "2023", "Specimen", "", "Création"],
  },
  {
    id: 7,
    slug: "edition",
    title: "Édition",
    subtitle: "Éditorial",
    date: "2023-07-22",
    image: "/projet7/1.jpg",
    description:
      "Projet d'édition combinant contenu éditorial et design graphique. La mise en page, le choix des matériaux et la direction artistique s'unissent pour créer une expérience de lecture immersive.",
    images: [],
    tableData: ["Édition", "2023", "", "Éditorial", "Mise en page"],
  },
  {
    id: 8,
    slug: "web",
    title: "Site Web",
    subtitle: "Web Design",
    date: "2023-07-22",
    image: "/projet8/1.jpg",
    description:
      "Conception et développement d'une interface web moderne et responsive. Ce projet met l'accent sur l'expérience utilisateur tout en maintenant une esthétique soignée et contemporaine.",
    images: [],
    tableData: ["Web", "2023", "", "Interface", "UX/UI"],
  },
  {
    id: 9,
    slug: "workshop",
    title: "Workshop",
    subtitle: "Archives",
    date: "2023-07-22",
    image: "/projet9/1.jpg",
    description:
      "Conception d'un workshop interactive pour les artistes et designers. Le design met l'accent sur l'expérience utilisateur tout en maintenant une esthétique soignée et contemporaine.",
    images: [],
    tableData: ["Workshop", "2023", "Archives", "", "Formation"],
  },
  {
    id: 10,
    slug: "projet10",
    title: "Projet 10",
    subtitle: "Collection",
    date: "2023-06-15",
    image: "/projet10/1.jpg",
    description:
      "Exploration créative et visuelle dans ce dixième projet. Une approche contemporaine qui mélange différentes techniques et supports pour créer une expérience unique.",
    images: [],
    tableData: ["Projet 10", "2023", "", "Collection", "Exploration"],
  },
  {
    id: 11,
    slug: "projet11",
    title: "Projet 11",
    subtitle: "Minimal",
    date: "2023-06-01",
    image: "/projet11/1.jpg",
    description:
      "Approche minimaliste et épurée pour ce projet axé sur l'essentiel. Chaque élément est pensé pour servir le message principal avec élégance et simplicité.",
    images: [],
    tableData: ["Projet 11", "2023", "", "Minimal", "Design"],
  },
  {
    id: 12,
    slug: "projet12",
    title: "Projet 12",
    subtitle: "Motion",
    date: "2023-05-20",
    image: "/projet12/1.mp4",
    description:
      "Projet axé sur le motion design et l'animation. Une exploration des possibilités du mouvement dans la communication visuelle, créant des expériences dynamiques et engageantes.",
    images: [],
    tableData: ["Projet 12", "2023", "", "Motion", "Animation"],
  },
];
