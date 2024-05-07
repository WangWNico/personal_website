"use client";

import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section className="mb-21 max-w-[50rem] text-center sm:mb-0">
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
                <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.25,
                    }}
                >
                    <img 
                        src="/portrait.jpg" 
                        width={192} 
                        height={192}
                        className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                    />
                </motion.div>
                
                <motion.span
                    className="absoolute bottom-0 left-0 text-4xl"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7,
                    }}
                >
                    👋
                </motion.span>

                <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    >
                    <span className="font-extrabold">Hello, I'm Nico.</span> I'm a{" "}
                    <span className="underline">
                        Software Developer, Game Dev, Novice Cyber Security Analyst,
                        Website Designer, & Website Dev
                    </span>. I'm a{" "}
                    <span className="italic">Computer Science Major -</span>{" "}
                    <span className="font-bold">Sophomore at Rensselaer Polytechnic Institute</span>
                    . I enjoy building <span className="italic">sites & apps</span>. My current focus is{" "}
                    <span className="underline">React (Next.js)</span>.
                </motion.h1>

                <motion.div className="flex flex-col sm:flex-row iterm-center justify-center gap-5 px-4 text-lg font-medium"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.1,
                    }}
                >
                    <Link 
                        href="#contact"
                        className="group bg-gray-900 text-white px-7  py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    >
                        Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
                    </Link>

                    <a 
                        className="group bg-white px-7  py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-10 transition cursor-pointer border-black/10" href="/CV.pdf" download={true}
                    >
                        Download CV{" "} <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
                    </a>

                    <a className="p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-10 transition cursor-pointer border-black/10" href="https://www.linkedin.com/in/nico-wang-web" target="_blank">
                        <BsLinkedin />
                    </a>

                    <a className="p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-10 transition cursor-pointer border-black/10" href="https://github.com/WangWNico" target="_blank">
                        <FaGithubSquare />
                    </a>
                </motion.div>
            </div>
        </div>
    </section>
  )
}
