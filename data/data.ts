import { Project, Service, Techonology } from "../types/types";
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { BiAnalyse } from "react-icons/bi";
import { MdDeveloperMode } from "react-icons/md";
import {
  SiFirebase,
  SiFlutter,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiReact,
  SiSymfony,
  SiTypescript,
} from "react-icons/si";

export const links = [
  { label: "Home", path: "/", targetSegment: null },
  { label: "Compétences", path: "/skills", targetSegment: "skills" },
  { label: "Projets", path: "/projects", targetSegment: "projects" },
];

export const technologies: Techonology[] = [
  { Icon: SiFlutter, label: "Flutter" },
  { Icon: SiSymfony, label: "Symfony" },
  { Icon: SiNextdotjs, label: "Nextjs" },
  { Icon: SiPhp, label: "PHP" },
  { Icon: SiTypescript, label: "Typescript" },
  { Icon: SiReact, label: "React" },
  { Icon: SiMysql, label: "Mysql" },
  { Icon: SiFirebase, label: "Firebase" },
];

export const services: Service[] = [
  {
    Icon: BiAnalyse,
    title: "Analyse et conception",
    about:
      "Analyse des besoins du client, Diagrammes : UML use case, Analyse, Classes, GANTT.",
  },
  {
    Icon: FaServer,
    title: "Back-end",
    about:
      "Construire une application organisée en couches. Développer les parties back-end d'une interface utilisateur web.",
  },
  {
    Icon: RiComputerLine,
    title: "Front-end",
    about:
      "Maquetter une Application web & mobile. Développer les parties front-end d'une interface utilisateur web & mobile. ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Environnement, versioning...",
    about:
      "Utilisation de Git (Github, Gitlab), mise en production (Gitlab(CI/CD), connexion SFTP, LAMP, Linux).",
  },
  {
    Icon: AiOutlineApi,
    title: "TESTS...",
    about:
      "Préparer et éxécuter les plans de tests d'une application (unitaires, fonctionnels, de régression).",
  },
  {
    Icon: AiOutlineApi,
    title: "BDD, API, DOCKER",
    about:
      "Concevoir une Base De Données relationnelle complexe, créer une API REST solide, utiliser Docker.",
  },
];

export const description: string =
  "Bienvenue sur mon portfolio. Je suis Développeur Full Stack ; mon expertise en conception d'interfaces conviviales web ou mobile, en développement d'API robustes et la résolution de problèmes complexes seront des atouts pour votre entreprise.";

export const subdescription: string =
  "Adaptable et passionné par l'innovation, je m'engage à rester à la pointe des technologies pour fournir des solutions applicatives efficaces.";

export const projects: Project[] = [
  {
    id: "1",
    name: "EVENTHUB",
    image_path: "/images/eventhub/eventhub_web.png",
    other_path: "/images/eventhub/event_phone.png",
    other_images: ["eventhub/eventhub_web.png", "eventhub/event_phone.png"],
    deployed_url: "https://lm-eventhub-next13.vercel.app/",
    github_url: "https://github.com/Lud-ly/eventhub_next13",
    other_url: "eventhub/event_phone.png",
    category: ["NEXT"],
    description:
      "Application offre une plateforme dynamique pour le partage et la discussion de questions, avec la possibilité pour les utilisateurs de présenter des propositions et de participer à un processus de vote communautaire.",
    key_techs: ["Prisma", "PostgreSQL"],
  },
  {
    id: "2",
    name: "SITE CLIENT ELECTRICIEN BKPRO",
    image_path: "/images/bkpro/bkprosite.png",
    other_path: "/images/bkpro/repobatiweb.png",
    other_images: [
      "bkpro/bkprococlient.png",
      "bkpro/bkpromapclient.png",
      "bkpro/bkprodemandededevis.png",
      "bkpro/bkprosite.png",
    ],
    deployed_url: "http://198.244.231.59",
    github_url: "https://gitlab.com/batiweb/back-office",
    other_url: "bkpro/repobatiweb.png",
    category: ["SYMFONY"],
    description:
      "Ce projet est un site Internet vitrine pour un électricien, mettant en avant ses services. L'ajout d'un espace client permettra aux utilisateurs de se connecter et de soumettre des demandes de devis en ligne, de suivre l'état de leurs projets et de faciliter la communication avec l'entreprise.",
    key_techs: ["REST API", "Bootstrap5", "PHP", "JS", "TWIG"],
  },
  {
    id: "3",
    name: "BACKOFFICE BKPRO BATIWEB",
    image_path: "/images/bkpro/card_back_bkpro.png",
    other_path: "/images/bkpro/apiplatform.png",
    other_images: [
      "bkpro/backoffice.png",
      "bkpro/intervention.png",
      "bkpro/bkprobackofficeproducts.png",
      "bkpro/users.png",
      "bkpro/bkproplanning.png",
      "bkpro/chartbackoffice.png",
      "bkpro/b15.png",
    ],
    deployed_url: "http://198.244.231.59/admin",
    github_url: "https://gitlab.com/batiweb",
    other_url: "bkpro/repobatiweb.png",
    category: ["SYMFONY"],
    description:
      "Le backoffice pour l'électricien vise à simplifier la gestion des devis, des produits, et à faciliter les interventions des collaborateurs sur le terrain. Les fonctionnalités comprennent le suivi des interventions, les devis, la gestion des produits et l'affectation des interventions aux artisans, le planning etc. Une Connexion en temps réel avec les applications mobile Bkpro. L'objectif est d'optimiser l'efficacité opérationnelle, de coordonner les interventions sur site et d'améliorer la gestion globale des projets pour le professionnel artisan.",
    key_techs: [
      "TWIG",
      "EASYADMIN",
      "API PLATFORM",
      "MySQL",
      "ORM doctrine",
      "CHARTJS",
    ],
  },
  {
    id: "4",
    name: "APPLICATION MOBILE BKPRO",
    image_path: "/images/bkpro/card_bkpro_mobile.png",
    other_images: [
      "bkpro/splash_mobile.png",
      "bkpro/bkpromobile.png",
      "bkpro/trackingintervention.png",
      "bkpro/card_bkpro_mobile.png",
    ],
    other_path: "",
    deployed_url: "#",
    github_url: "https://gitlab.com/batiweb/frontend",
    other_url: "bkpro/trackingintervention.png",
    category: ["FLUTTER"],
    description:
      "Application pour les employés de l'électricien offre des fonctionnalités avancées telles que la géolocalisation des interventions sur Google Maps. Les employés peuvent facilement envoyer des demandes de devis au backoffice commerçant, accéder à leur planning et obtenir des informations détaillées sur leurs interventions. Cette application vise à simplifier la communication, à améliorer la productivité sur le terrain et à garantir une gestion efficace des tâches pour les artisans.",
    key_techs: ["GoogleMap", "Socket io"],
  },
  {
    id: "5",
    name: "CALCULATEURS POMPE À CHALEUR",
    image_path: "/images/heatpump/heatpumph.png",
    other_path: "/images/heatpump/repo.png",
    other_images: [
      "heatpump/heatpumph.png",
      "heatpump/heatpumpb.png",
      "heatpump/primus.png",
      "heatpump/primusb.png",
      "heatpump/readme.png",
    ],
    deployed_url: "https://heatpumpcalculator.primuslaundry.com/",
    github_url: "https://gitlab.com/a8055/heatpumpcalculator/",
    other_url: "heatpump/repo.png",
    category: ["SYMFONY"],
    description:
      "Comparateur de coûts entre une pompe à chaleur et une source électrique avec des hypothèses ajustables. Possibilité de sauvegarder chaque calcul sous forme de PDF pour référence future.",
    key_techs: ["Symfony 6", "MySQL", "JS"],
  },
  {
    id: "6",
    name: "ONLiVYOU BACKOFFICE",
    description:
      "Participation au développement des routes API pour le POC du Backoffice E-commerce destiné aux commerçants, construit en Next.js avec Firebase et une API. Offre une visibilité en temps réel et une gestion efficace des livraisons, des produits, et des performances financières. Ce Backoffice est étroitement intégré à l'application mobile associée, simplifiant ainsi la coordination entre les livreurs et les clients",
    image_path: "/images/onlivyou/onlivyoufr.png",
    other_path: "/images/onlivyou/repo_onlivyou.png",
    other_images: [
      "onlivyou/settingback.png",
      "onlivyou/commandeback.png",
      "onlivyou/commandedetail.png",
      "onlivyou/encoursback.png",
    ],
    deployed_url:
      "https://liv-frontend-dev-git-develop-trsaid.vercel.app/dashboard",
    github_url: "https://github.com/onlivyou/liv_frontend_commercant",
    other_url: "onlivyou/repo_onlivyou.png",
    category: ["NEXT"],
    key_techs: ["SOCKET", "FIREBASE", "API REST"],
  },
  {
    id: "7",
    name: "APPLICATION MOBILE ONLiVYOU",
    description:
      "Contributions à la réalisation de ce POC : facilitation des achats d'articles dans les boutiques locales autour de la position du client à Nice. Mise en place d'un suivi de livraison avec le tracking du livreur OnLivYou, permettant ainsi aux clients de recevoir leur commande en moins d'une heure par le biais des livreurs OnLivYou. Ceci concerne une variété de produits provenant des boutiques locales de Nice.",

    image_path: "/images/onlivyou/card_onlivyou_mobile.png",
    other_path: "/images/onlivyou/github.png",
    other_images: [
      "onlivyou/trackingcourse.png",
      "onlivyou/onlivyoumobile.png",
      "onlivyou/ordermobile.png",
    ],
    deployed_url: "https://apps.apple.com/fr/app/onlivyou/ref6447993451",
    github_url: "https://www.github.com/onlivyou/liv_mobile",
    other_url: "onlivyou/github.png",

    category: ["FLUTTER"],
    key_techs: ["Dart", "GoogleMap", "Socket.io", "Firebase"],
  },
  {
    id: "8",
    name: "BATIWEB COM",
    image_path: "/images/bkpro/batiweb_doc2.png",
    other_path: "bkpro/repobatiweb.png",
    other_images: ["bkpro/batiweb_doc.png", "bkpro/batiweb_doc2.png"],
    deployed_url: "#",
    github_url: "https://gitlab.com/batiweb",
    other_url: "bkpro/repobatiweb.png",
    category: ["NEXT"],
    description: "Application de communication des features de Batiweb",
    key_techs: ["Prisma", "PostgreSQL"],
  },
];
