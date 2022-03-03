import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable websites using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using  <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "Database administration",
    about:
      "use SQL, MS SQL server to store and organize data.  as well as backup and data recovery. ",
  },
  {
    Icon: RiComputerLine,
    title: "Soft Skills",
    about:
      "Problem-solving, Leadership, Teamwork, Decision making Work ethic & Communication",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "HTML5, CSS3",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "React js",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "Next js",
    level: "30",
  },
  {
    Icon: BsCircleFill,
    name: "Node JS",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "SQL",
    level: "70",
  },  
  
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Git & Github",
    level: "80",
  },
  
  {
    Icon: BsCircleFill,
    name: "Linux",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "cPanel",
    level: "45",
  }, {
    Icon: BsCircleFill,
    name: "Wix",
    level: "90",
  },
];

export const projects: IProject[] = [
  { 
    name: "School Website",
    description:
      "contains 8 pages, one of which is an admin page and the rest is shown to students and a login page ",
    image_path: "/images/school.webp",
    deployed_url: "https://mostaql.com/u/Roqaia_RF",
    github_url: "https://github.com/RoqaiaRF",
    category: ["wix"],
    key_techs: ["Javascript", "Wix", "HTML & CSS"],
  },
  {
    name: "Company Profile",
    image_path: "/images/snapbot.png",
    deployed_url: "https://www.snapbot.store/",
    github_url: "https://github.com/RoqaiaRF/landingPage-snapbot",
    category: ["Javascript"],
    description:
      "A multilingual landing page for a company that has an application that you want to display in an attractive way to the customer.",
    key_techs: ["Javascript", "HTML5", "CSS"],
  },

  {
    name: "Encoding Electronic Fatora",
    image_path: "/images/qr.png",
    deployed_url: "https://www.youtube.com/watch?v=EBkHUInNr4U&feature=youtu.be",
    github_url: "https://github.com/RoqaiaRF/Qr-code-encoding-base64-TVL-",
    category: ["node", "express", "HTML & CSS"],
    description:
      "The qr code conforms to the conditions of the Saudi Zakat Authority, encoded base 64, TVL",
    key_techs: [
      "ejs",
      "Node",
      "Express",
      "SQL Server",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    name: "House & Keto",
    image_path: "/images/keto.png",
    deployed_url: "https://qoraia97.wixsite.com/keto",
    github_url: "https://github.com/RoqaiaRF",
    category: ["HTML & CSS", "wix"],
    description:
      "A website to display keto foods, the site also contains a shop for sale, chat and other features",
    key_techs: ["wix", "HTML & CSS", "Javascript"],
  },

  {
    name: "Whatsapp Sender",
    image_path: "/images/whatsapp.png",
    deployed_url: "https://www.youtube.com/watch?v=gtsj8Ej7MN0",
    github_url: "https://github.com/RoqaiaRF/send-whatsapp-messeges",
    category: ["node", "express","HTML & CSS"],
    description:
      "A web app that sends WhatsApp messages without saving the number.",
    key_techs: ["ejs", "node", "express"],
  },

  {
    name: "landing page for an electrical company",
    image_path: "/images/land.png",
    deployed_url: "https://www.shortcutsc.com/",
    github_url: "https://github.com/RoqaiaRF",
    category: ["wix"],
    description:
      "consisting of a chat to respond to customers and the company's website on the map in addition to a form to contact us and our team and some photos",
    key_techs: ["wix", "HTML & CSS"],
  },
  {
    name: "recruitment website",
    image_path: "/images/tawzeef.png",
    deployed_url: "https://www.wazzfny.com/",
    github_url: "https://github.com/RoqaiaRF",
    category: ["wix"],
    description:
      'This work was done with another programmer ',
    key_techs: [
      "wix",
      "HTML & CSS",
      "Firebase Auth",
      "Javascript",
    ],
  },
  {
    name: "Realtime chat App",
    image_path: "/images/chat.png",
    deployed_url: "https://github.com/RoqaiaRF",
    github_url: "https://github.com/RoqaiaRF",
    category: ["react"],
    description:
      "It is a messenger-like chat application It can be used within organizations or for secret conversations where it is allocated to you only and under your management only You can send files, photos, videos and links. You can also adjust the font when writing :) It is also possible to know the status of the user if he is online or not and if he is writing or not ",
    key_techs: ["React", "Firebase Auth", "API"],
  },
];
