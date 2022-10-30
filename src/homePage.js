import React from "react";
import Hero from "./components/hero/hero";
import FirstInfo from "./components/firstInfo/firstInfo";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1, transition:{duration:.5, type: 'ease'}}}
      exit={{x:-window.innerWidth, transition:{duration:.5,type:'slide'}}}
      >
      <Hero />
      <FirstInfo />
    </motion.div>
  );
}
