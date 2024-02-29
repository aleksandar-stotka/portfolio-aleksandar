import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaVuejs } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Vue.js",
    icon: <FaVuejs className="h-16 w-16 text-emerald-500" />,
    text: "Vue.js is my first framework that I learned, I have done several projects with it, most of them are real projects for customers, I can single out one personal one that is listed below in the link",
  },
];
export const projects = [
  {
    id: nanoid(),
    img: "https://i.pinimg.com/originals/c3/ec/b2/c3ecb2f252e456407b1e20b8754030d1.jpg",
    url: "https://www.lawofficelazarov.com/",
    github: "https://gitlab.com/slavcoc/law-office-lazarov",
    title: "law-office-lazarov",
    text: "This website represents my first substantial project as a developer. Built entirely with Nuxt.js and powered by Strapi, an open-source Node.js headless CMS, it showcases my initial foray into creating dynamic and scalable online solutions. This project reflects a significant milestone in my development journey, combining powerful technologies to deliver a robust user experience",
  },
  {
    id: nanoid(),
    img: "https://us.123rf.com/450wm/axelbueckert/axelbueckert1904/axelbueckert190400031/122167768-feet-in-canvas-shoes-standing-inside-comfort-zone-foot-selfie-from-personal-perspective-chalk-text.jpg?ver=6",
   
    github: "https://github.com/aleksandar-stotka/sway",
    title: "Sway",
    text: "E-Commerce Furniture Hub: A sleek and responsive web platform created with React.js, dedicated to the sale of quality furniture. It features an extensive array of filters, allowing users to effortlessly navigate and select products that best fit their preferences and needs",
  },
  {
    id: nanoid(),
    img: "https://img.freepik.com/premium-vector/connecting-people-social-network-concept-bright-background-vector-illustration_191567-956.jpg",
    url: "https://project-friends-connect.netlify.app",

    github: "https://github.com/aleksandar-stotka/project-friends-connect",
    title: "Project Friends Connect",
    text: "My Simple Project Manager: An Interactive Web Platform crafted with React.js, where users can effortlessly create and manage their own projects while engaging in seamless communication. Utilizing Firebase as a real-time database, it ensures efficient and reliable management of project data ",
  },
];
