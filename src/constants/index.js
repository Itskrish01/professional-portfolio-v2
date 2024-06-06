import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  flutter,
  typescript,
  git,
  javascript,
  nextjs,
  redux,
  tailwind,
  react,
  firebase,
  css,
  html,
  linkedIn,
  github
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#home",
  },
  {
    id: "1",
    title: "About",
    url: "#about",
  },
  {
    id: "2",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "13",
    title: "Experience",
    url: "#experience",
  },
  {
    id: "3",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [flutter, react, git, redux];


export const skills = [
  nextjs,
  flutter,
  redux,
  git,
  typescript,
  react,
  javascript,
  tailwind,
  firebase,
  css,
  html
];

export const roadmap = [
  {
    id: "0",
    title: "Front end Development",
    text: "Experienced frontend developer proficient in HTML, CSS, and JavaScript frameworks such as ReactJS and Next.js. Familiar with CSS frameworks like Tailwind CSS for rapid UI development. Collaborative team player with a meticulous attention to detail and a passion for driving projects forward with creativity and technical precision.",
    colorful: true,
  },
  {
    id: "1",
    title: "App Developer",
    text: "Experienced app developer proficient in Flutter for cross-platform mobile development. Skilled in Dart, crafting beautiful and responsive UIs. Collaborative team player focused on delivering high-quality, seamless user experiences.",
  },
  {
    id: "2",
    title: "Design",
    text: "Experienced UI/UX specialist with a strong foundation in frontend development. Proficient in crafting visually appealing and intuitive user interfaces that prioritize usability and engagement. Collaborative and detail-oriented, they excel in designing seamless digital experiences that leave a lasting impression.",
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const experienceContent = [
  {
    id: "0",
    companyName: "Mile9 Solutions",
    duration: "Sep 21, 2023 - Present",
    position: "Software developer",
    description:
      "Creating Web apps and mobile apps using, Flutter, React, Nx, and Firebase",
    tags: [
      "Flutter",
      "Javascript",
      "Typescript",
      "HTML",
      "CSS",
      "ReactJS",
      "Dart",
      "Firebase",
    ],
  },
  {
    id: "1",
    companyName: "Omikron Technologies Pvt. Ltd",
    duration: "Mar 21, 2023 - May 21, 2023",
    position: "Software developer",
    description:
      "Built highly dynamic web apps and added highly complex logics to the app.",
    tags: ["Javascript", "HTML", "CSS", "ReactJS", "Redux"],
  },
  {
    id: "2",
    companyName: "Snooze buzz",
    duration: "Sep 22, 2022 - Aug 1, 2023",
    position: "Front developer",
    description:
      "I was engaged in the development of a web application based on NextJS technology. My responsibilities encompass the refinement of the product's features within the dashboard and the implementation of an aesthetically pleasing user interface for the website's frontend.",
    tags: ["Javascript", "HTML", "CSS", "ReactJS", "NextJS", "Redux"],
  },
];

export const skillsApps = [
  {
    id: "0",
    title: "Flutter",
    icon: flutter,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "ReactJS",
    icon: react,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "TypeScript",
    icon: typescript,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Tailwind",
    icon: tailwind,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Javascript",
    icon: javascript,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "NextJS",
    icon: nextjs,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Git",
    icon: git,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Redux",
    icon: redux,
    width: 38,
    height: 32,
  },
];

export const projects = [
  {
    id: "001",
    title: "Apple Landing page (iPhone 15)",
    text: "Landing page for iPhone 15 Pro, it's almost the same as real apple website landing page for iPhone 15 Pro",
    backgroundUrl: "./src/assets/projects/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: 'cool-projects/apple-site.png',
    url: "https://iphone-15-landing-page.netlify.app/",
  },
  {
    id: "0",
    title: "Ecommerce website",
    text: "An ecommerce site built on NextJS. Enjoy seamless navigation, responsive design, and essential shopping functionalities like cart management, item display, variant-based imagery, and effective filtering.",
    backgroundUrl: "./src/assets/projects/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: 'cool-projects/ecommerce.png',
    url: "https://nextjs-ecommerce-app-five.vercel.app/",
  },
  {
    id: "2",
    title: "Coddy Quzzy (Quiz App)",
    text: "Welcome to the Quiz App project! This is a web application built using React and Vite that allows users to take quizzes on various topics.",
    backgroundUrl: "./src/assets/projects/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: 'cool-projects/quiz.png',
    url: "https://itskrish01-coddy-quzzy.netlify.app/",
  },
  {
    id: "3",
    title: "Tweetie Tutu",
    text: "Tweetie TuTu: Craft hilarious fake tweets effortlessly and add a playful twist to your social media game!",
    backgroundUrl: "./src/assets/projects/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: 'cool-projects/tweet.png',
    url: "https://tweetie-tutu.netlify.app/",
  },
  {
    id: "4",
    title: "Dictionary App",
    text: "A dictionary app where you can search for words and it provides you all the details, I used dictionary API to fetch the data.",
    backgroundUrl: "./src/assets/projects/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: 'cool-projects/dict.png',
    url: "https://dictionary-itskrish01.netlify.app/",
  },
  {
    id: "5",
    title: "Ai tooly",
    text: "An AI tool, that you can use to Rephrase text and generate images, Also a translator.",
    backgroundUrl: "./src/assets/projects/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: 'cool-projects/ai.png',
    url: "https://ai-tooly-itskrish01.netlify.app/",
  },
];

export const socials = [
  {
    id: "1",
    title: "Git hub",
    iconUrl: github,
    url: "https://github.com/Itskrish01",
  },
  {
    id: "2",
    title: "LinkedIn",
    iconUrl: linkedIn,
    url: "https://www.linkedin.com/in/krish-t-138400217/",
  },
];
