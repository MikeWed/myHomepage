import React from 'react'
import {motion} from "framer-motion"

export default function Title({text}) {

const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: { staggerChildren: .1, delayChildren: 0.1, staggerDirection: 1 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        // damping: 100,
        // stiffness: 200,
        // mass: 10,
      },
    },
    hidden: {
      opacity: 0,
      x: 200,
      y: 0,
    //   transition: {
    //     type: "spring",
    //     damping: 12,
    //     stiffness: 100,
    //   },
    },
  };

  return (
    <motion.h1
      style={{ display: "flex", justifyContent: "center"}}
      variants={container}
      initial="hidden"
      whileInView="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}
