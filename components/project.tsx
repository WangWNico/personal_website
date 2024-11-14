"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];
export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  index,
}: ProjectProps & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className="bg-[#c4eaf8] border border-black-/9 overflow-hidden sm:pr-8 relative h-fit shadow-2xl max-w-[50rem] rounded-[2.5rem] hover:bg-[#ADD8E6] grid grid-cols-1 md:grid-cols-2"
      >
        {index % 2 == 0 && <div><Image
          src={imageUrl}
          alt="Projects I worked on"
          quality={50}
          width={0}
          height={0}
          className="h-[16rem] w-fit rounded-t-lg shadow-2xl transition aspect-[16/9] object-cover mx-auto my-4 md:block -left-20 -bottom-8 hidden absolute hover:rotate-6 hover:scale-105 duration-300"
          sizes="100vw"
        /></div>}
        <div className="sm:pl-10 sm:pr-2 sm:pt-10 flex-col flex gap-3 h-full p-8 py-12 ">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className=" leading-relaxed text-gray-700">{description}</p>
          <Image
            src={imageUrl}
            alt="Projects I worked on"
            quality={50}
            width={0}
            height={0}
            className="h-[16rem] w-fit rounded-t-lg shadow-2xl transition aspect-[16/9] object-cover mx-auto my-4 md:hidden hover:scale-105 duration-300"
            sizes="100vw"
          />
          <ul className="flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 sm:text-[0.7rem] text-[0.5rem] uppercase tracking-wider text-white rounded-full "
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          {link && (
            <a
              href={link}
              className="mt-4 text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          )}
        </div>
        {index % 2 == 1 && <Image
          src={imageUrl}
          alt="Projects I worked on"
          quality={50}
          width={0}
          height={0}
          className="h-[16rem] w-fit rounded-t-lg shadow-2xl transition aspect-[16/9] object-cover mx-auto my-4 md:block hidden absolute -right-20 -bottom-8   hover:-rotate-6 duration-300 hover:scale-105"
          sizes="100vw"
        />}
      </section>
    </motion.div>
  );
}
