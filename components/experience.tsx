"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';

export default function Experience() {
    const { ref } = useSectionInView("Experience", 0.45);
    return (
        <section ref = { ref } id="experience" className='scroll-mt-28 mb-28 sm:mb-40 text-center'>
            <SectionHeading>My experience</SectionHeading>
            <VerticalTimeline lineColor=""> 
            {experiencesData.map((item, index) => (
                <React.Fragment key={index}>
                    <VerticalTimelineElement visible={true} 
                        contentStyle={{
                            background: "#CBC3E3",
                            boxShadow: "none",
                            border: "1px solid rgba(0,0,0, 0.05)",
                            textAlign: "left",
                            padding: "1.3rem 2rem",
                        }}
                        contentArrowStyle={{
                            borderRight: "0.4rem solid #9ca3af"
                        }}
                        icon={item.icon}
                        date={item.date}
                        iconStyle={{
                            background: "rgb(224, 224, 224)",
                            fontSize: "1.5rem",
                        }}>
                        <h3 className="font-semibold capitalize">{item.title}</h3>
                        <p className="font-normal !mt-0">{item.location}</p>
                        <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>
                    </VerticalTimelineElement>
                </React.Fragment>
                
            ))}
            </VerticalTimeline>
        </section>
    );
}