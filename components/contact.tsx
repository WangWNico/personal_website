"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks';
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail"

function Contact() {
    const { ref } = useSectionInView("Contact", 0.8);

    
    return (
        <motion.section ref={ref} id="contact" 
            className='scroll-mt-28 sm:mb-28 mb-20 w-[min(100%,38rem)] text-center'
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact Me</SectionHeading>
            <p className='text-gray-700 -mt-6'>
                Please contact me directly at{" "}
                <a className="underline" href="mailto:nicowang0404@gmail.com">
                    nicowang0404@gmail.com
                </a>{" "}or through this form.
            </p>

            <form className='mt-10 flex flex-col' 
                action={ async (formData) => {
                    await sendEmail(formData);
                }}
            >
                <input 
                    type="email" 
                    maxLength={500} 
                    required className='h-14 rounded-lg borderBlack px-4' 
                    placeholder='Your email'
                    name='senderEmail'
                ></input>
                <textarea 
                    required 
                    name='message'
                    maxLength={5000} 
                    className='h-52 my-3 rounded-lg borderBlack px-4 py-4' 
                    placeholder='Your message'
                />
                <button type="submit" 
                    className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 hover:bg-gray-950
                    text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-10'>
                        Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' ></FaPaperPlane>
                    </button>
            </form>
        </motion.section>
    )
}

export default Contact