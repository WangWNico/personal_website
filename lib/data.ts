import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { HiComputerDesktop } from "react-icons/hi2";
import gamemenuImg from "@/public/game_menu.png";
import cephPoster from "@/public/Ceph_Poster.jpg";
import sysflowPoster from "@/public/SysFlow_Poster.jpg";
import CPU from "@/public/CPU.jpg";
import QuestListImg from "@/public/QuestList.jpg";
import MipsImg from "@/public/mips.jpg";
import MangoMapsImg from "@/public/MangoMaps.png";
import TanukiTreatsImg from "@/public/TanukiTreats.png";
import GitHubImg from "@/public/GitHub.jpg";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Machine Learning Data Synthesis Research Assistant",
    location: "Troy, NY",
    description:
      "I worked with a team of researchers to develop a machine learning model that could synthesize data for the purpose of training other machine learning models. I also worked on a project that involved creating member inference attacks for LLMs.",
    icon: React.createElement(FaReact),
    date: "2024 - Present",
  },
  {
    title: "Cyber Security Analyst | IBM SysFlow",
    location: "Troy, NY",
    description:
      "I documented project steps, troubleshooting, paving the way for group members to set up and participate in the project. My team and I ended up analyzing threats and vulnerabilities by creating graphics and Jupiter Notebooks.",
    icon: React.createElement(CgWorkAlt),
    date: "Early 2024",
  },
  {
    title: "Software Developer | IBM CEPH",
    location: "Troy, NY",
    description:
      "I worked with a team and mentor from IBM on developing the 'Ceph balancer status' command to provide detailed information on the changes made during the optimization of a Ceph cluster.",
    icon: React.createElement(CgWorkAlt),
    date: "Late 2023",
  },
  {
    title: "Started CS Degree and Rensselaer Polytechnic Institute",
    location: "Troy, NY",
    description:
      "Started my college journey.",
    icon: React.createElement(HiComputerDesktop),
    date: "2022-2026",
  },
  {
    title: "Graduated Brooklyn Technical High School",
    location: "Brooklyn, NY",
    description:
      "I graduated after 4 years with a specialized diploma in Media studies.",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2022",
  },
] as const;

export const projectsData = [
  { title: "MangoMaps.tech",
    description:
      "Utilized Google Places API, MapBox API, and React to create an interactive map that visualizes the impact of natural disasters on local businesses. Awarded Best Data Science Hack at HackRPI. ",
    tags: ["React", "GoogleMaps API", "MapBox API", "React", "Next.js", "Git"],
    imageUrl: MangoMapsImg,
    link: "https://mangomaps.tech",
  },
  {
    title: "TanukiTreats.com",
    description: "Built TanukiTreats.com, a commercial site featuring a global selection of snacks. Created with React, Next.js, and CSS for a smooth, engaging user experience and intuitive navigation. ",
    tags: ["React", "Next.js", "CSS", "JavaScript", "Git"],
    imageUrl: TanukiTreatsImg,
    link: "https://tanukitreats.com",
  },
  {
    title: "Dungeon Game",
    description:
      "Participated in a hackathon with friends, where we developed a dungeon-crawling RPG using Godot for game development. ",
    tags: ["Godot", "Git", "Adobe Photoshop", "Adobe Illustrator"],
    imageUrl: gamemenuImg,
    link: "https://devpost.com/software/dungeon-delve-hooded-blu",
  },
  {
    title: "SysFlow",
    description:
      "Developed analytics for vulnerabilities such as ShellShock using python notebooks and Sysflow trace technologies.",
    tags: ["Python", "Docker", "VirtualBox", "Git", "Cybersecurity"],
    imageUrl: sysflowPoster,
    link: "https://github.com/WangWNico/sf-lab",
  },
  {
    title: "QuestList Freelancing Startup",
    description:
      "At QuestList, I worked with a team to enhance the website’s user experience by developing interactive, responsive web pages using React and JavaScript. ",
    tags: ["Web Design", "Web Development", "React", "JavaScript", "Git"],
    imageUrl: QuestListImg,
    link: ""
  },
  {
    title: "CPU Architecture Design",
    description:
    "Designed a CPU architecture using Verilog and MIPS Assembly to simulate core operations, including an ALU, control unit, registers, and memory modules capable of executing basic instructions. ",
    tags: ["Assembly Language", "Verilog", "MIPS Assembly", 'CPU design'],
    imageUrl: CPU,
    link: "https://github.com/WangWNico/CompOrgProject23",
  },
  {
    title: "Ceph",
    description:
      "Enhanced the 'Ceph balancer status' command to provide detailed information on the changes made during the optimization of a Ceph cluster.",
    tags: ["Python", "Git", "Data Analytics"],
    imageUrl: cephPoster,
    link: "https://github.com/WangWNico/ceph"
  },
  {
    title: "MIPS Compiler in C",
    description:
      "Built a basic compiler in C for MIPS Assembly, designed to translate assembly instructions into machine-readable code for execution. This project involved parsing, translating, and optimizing MIPS instructions to ensure accurate and efficient processing. ",
    tags: ["C", "MIPS"],
    imageUrl: MipsImg,
    link: ""
  },
  {
    title: "Check Out My Github",
    description:
      "Explore my GitHub to see more of my projects. ",
    tags: ["Github", "Git"],
    imageUrl: GitHubImg,
    link: "https://github.com/WangWNico"
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "C, C#, C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "CSS",
  "SQL",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Godot Game Engine",
  "PyTorch",
  "Vercel",
  "Expo",
  "Google Firebase",
  "HuggingFace",
  "TensorFlow",
  "Docker",
  "Linux",
  "Certified AWS Cloud Practitioner",

] as const;