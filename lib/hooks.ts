import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { InView, useInView } from "react-intersection-observer";
import { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const { ref } = useInView({
        threshold,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
    useEffect(() => {
    if (InView && Date.now() - timeOfLastClick > 1000) {
        setActiveSection(sectionName);
    }
    }, [InView, setActiveSection, timeOfLastClick]);
    return {
        ref,
    };
}