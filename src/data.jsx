import { nanoid } from "nanoid";
import { FaAws, FaDigitalOcean, FaHtml5, FaJs, FaLinux, FaNodeJs, FaPython, FaReact, FaVuejs } from "react-icons/fa";

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
  
  {
    id: nanoid(),
    title: "Node.js",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: 'Im beginner in Node.js, but as I get deeper into the core of the language it gets more and more interesting '
  },
  {
    id: nanoid(),
    title: "Linux",
    icon: <FaLinux className="h-16 w-16 text-emerald-500" />,
    text: " I have been working with the Linux operating system for 2 years , and I have developed significant expertise that I believe adds value to my portfolio and showcases my skills with Linux. "
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16 text-emerald-500" />,
    text: " I want to research and upgrade also in backend programming languages I have basic knowledge of python , "
  },
  {
    id: nanoid(),
    title: "Aws",
    icon: <FaAws className="h-16 w-16 text-emerald-500" />,
    text: "Modestly knowledge of Aws, future field of research, I learned about aws when I was studying DeVops "
  },
  {
    id: nanoid(),
    title: "digitalocean",
    icon: <FaDigitalOcean className="h-16 w-16 text-emerald-500" />,
    text: "Built and deployed a website from scratch using DigitalOcean. Gained hands-on experience managing servers and deploying web applications — an area I’m keen to explore further." 
    
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
    img: "https://scontent.fskp2-1.fna.fbcdn.net/v/t39.30808-6/474812802_122096928230749481_3009033094274315750_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=UQdM265hXVUQ7kNvwEszlZ_&_nc_oc=AdkQtPFt8ArwO0nJlSjbWQ_7aqj7PEit6OYDxJ6nNyKW0SRah7nZ01RxmYVy5iFd7uo&_nc_zt=23&_nc_ht=scontent.fskp2-1.fna&_nc_gid=Zlt0J93m28wGaIOMQ-mxFQ&oh=00_AfRStcoq5r_Mk28Dk66hVKksZiopfv1SKynxBpBDfKgL9g&oe=688F94B5",
    url: "https://skara-house.com/",
    title: "Skara House",
    text: "Built Skara House, a grill food website, from scratch with Vue.js. Deployed using Docker on DigitalOcean.",
  },
  {
    id: nanoid(),
    img: "https://us.123rf.com/450wm/axelbueckert/axelbueckert1904/axelbueckert190400031/122167768-feet-in-canvas-shoes-standing-inside-comfort-zone-foot-selfie-from-personal-perspective-chalk-text.jpg?ver=6",
    url:'https://magnificent-snickerdoodle-82b541.netlify.app/products',
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
  
  {
    id: nanoid(),
    img: "https://img.freepik.com/free-vector/female-hands-holding-mobile-phone-with-newsletter-screen-woman-reading-world-news-using-smartphone-app-internet-flat-vector-illustration-newspaper-information-press-media-concept_74855-24529.jpg",
    url: "https://sparkling-rabanadas-9d6078.netlify.app/",

    github: "https://github.com/aleksandar-stotka/News-project",
    title: "News-Project",
    text: "My personal project is a small yet useful application that utilizes APIs and queries. With this app, users can select the area in which they wish to receive information. Additionally, the application is built using React.js to ensure scalability without unnecessary complexity",
  },
  {
    id: nanoid(),
    img: "https://img.freepik.com/free-photo/quadcopter-flying-nature_231208-10459.jpg",
    

    github: "https://github.com/aleksandar-stotka/drone-web",
    title: "Drone-Web",
    text: " Drone website, working on this site I learned about e commerce platforms, stripe an so on..",
  },
];
