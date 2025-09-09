"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
    children: React.ReactNode;
    delay?: number;
}

export function FadeInWhenVisible({ children, delay = 0 }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const inView = useInView(ref, { margin: "-100px 0px", once: true});

    useEffect(() => {
        if(inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay }}
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
            }}
        >
            {children}
        </motion.div>
    )   
}