"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> About me </SectionHeading>
      <p className="mb-3">
        I'm a computer science student at{" "}
        <span className="font-extrabold underline italic">
          Rensselaer Polytechnic Intitute
        </span>{" "}
        set to graduate in
        <span className="font-bold"> May of 2026. </span>
        <span className="italic">
          My favorite part of CS is being able to create.{" "}
        </span>
        <span className="font-bold">I love </span> the feeling of accomplishment
        when finishing a project.{" "}
        <span className="font-bold">
          I am currently looking for an intern position as a software developer.
        </span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy
        weightlifting, watching movies, playing chess, and playing video games.
        I also enjoy{" "}
        <span className="font-medium italic">learning new things</span> I am
        currently learning about{" "}
        <span className="font-bold">psychology and astronomy</span>.
      </p>
    </motion.section>
  );
}
