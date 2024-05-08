import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import gamemenuImg from "@/public/game_menu.png";
import cephPoster from "@/public/Ceph_Poster.jpg";
import sysflowPoster from "@/public/SysFlow_Poster.jpg";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
    title: "Ceph",
    description:
      "Enhanced the 'Ceph balancer status' command to provide detailed information on the changes made during the optimization of a Ceph cluster.",
    tags: ["Python", "Git", "Data Analytics"],
    imageUrl: cephPoster,
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