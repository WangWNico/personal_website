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
import MipsImg from "@/public/mips.png";



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
    title: "Cyber Security Analyst | IBM SysFlow",
    location: "Troy, TX",
    description:
      "I documented project steps, troubleshooting, paving the way for group members to set up and participate in the project. My team and I ended up analyzing threats and vulnerabilities by creating graphics and Jupiter Notebooks.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Software Developer | IBM CEPH",
    location: "Troy, NY",
    description:
      "I worked with a team and mentor from IBM on developing the 'Ceph balancer status' command to provide detailed information on the changes made during the optimization of a Ceph cluster.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
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
  {
    title: "Dungeon Game",
    description:
      "I attended a hackathon with some friends where we created a dungeon crawling rpg game.",
    tags: ["Godot", "Git", "Adobe Photoshop", "Adobe Illustrator"],
    imageUrl: gamemenuImg,
  },
  {
    title: "SysFlow",
    description:
      "Developed analytics for vulnerabilities such as ShellShock using python notebooks and Sysflow trace technologies.",
    tags: ["Python", "Docker", "VirtualBox", "Git", "Cybersecurity"],
    imageUrl: sysflowPoster,
  },
  {
    title: "QuestList Freelancing Startup",
    description:
      "Worked with team to improve the website and user interface.",
    tags: ["Web Design", "Graphic Design", "Web Development"],
    imageUrl: QuestListImg,
  },
  {
    title: "CPU Architecture Design",
    description:
      "Created a simple CPU architecture.",
    tags: ["Assembly Language", "Verilog", "MIPS Assembly", 'CPU design'],
    imageUrl: CPU,
  },
  {
    title: "Ceph",
    description:
      "Enhanced the 'Ceph balancer status' command to provide detailed information on the changes made during the optimization of a Ceph cluster.",
    tags: ["Python", "Git", "Data Analytics"],
    imageUrl: cephPoster,
  },
  {
    title: "MIPS Compiler in C",
    description:
      "Created a basic compiler for MIPS Assembly in C code.",
    tags: ["Python", "Git", "Data Analytics"],
    imageUrl: MipsImg,
  },
] as const;

export const skillsData = [
  "Java",
  "C, C#, C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Python",
  "Framer Motion",
  "Verilog",
  "MIPS Assembly",
  "R-Studio",
  "Godot Game Engine",
] as const;