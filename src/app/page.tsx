"use client"

import Head from "next/head";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReconsiderModal } from "./ReconsiderModal";
import MemoryReveal from "./MemoryReveal";
import "./styles.css";

export default function App() {
  const questions = [
    "Will you be my Valentine? 💘",
    "Picture me holding a tiny sign?",
    "This is a safe space for optimism…",
    "Hypothetically… is a positive outcome possible?",
    "For science, should we explore this option?",
    "Is this the moment before something cute happens?",
    "Should we see where this storyline goes?",
    "Do we make the perfect rom-com duo?",
    "Could this be the start of a romantic legacy 👀?",
    "Do we dare turn this “maybe” into a happily-ever-after?",
    "Alright, at least say yes for Sebastian Stew 🐧"
  ];

  const [index, setIndex] = useState(0);
  const [size, setSize] = useState(50);
  const [yesClicked, setYesClicked] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  function handleNo() {
    setSize((prev) => prev + 18);

    if (index === questions.length - 1) {
      setOpenModal(true);

      setIndex(0);
      setSize(40);
    } else {
      setIndex((prev) => prev + 1);
    }
  }

  function handleYes() {
    setYesClicked(true);
  }

  return (
    <div className="App">
      <Head>
        <link
  href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;800&display=swap"
  rel="stylesheet"
/>
      </Head>
      <AnimatePresence mode="wait">
        {!yesClicked ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <h1>Dear Princess Monica Monkey,</h1>
            <motion.h2
              layout
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            >
              {questions[index]}
            </motion.h2>

            <div className="buttons">
              <motion.button
                onClick={handleYes}
                style={{ width: size, height: size }}
                animate={{ scale: [1, 1.06, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  ease: "easeInOut"
                }}
                whileTap={{ scale: 0.95 }}
                className="primary"
              >
                Yes
              </motion.button>

              <motion.button
                onClick={handleNo}
                whileHover={{ x: [-2, 2, -2, 0] }}
                transition={{ duration: 0.25 }}
                className="secondary"
              >
                No
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="yes"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 14
            }}
            className="yes-screen"
          >
            <h1>She said YESSSSSSS 💖</h1>
            <MemoryReveal />

            <div className="hearts">
              {[...Array(6)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: -40 }}
                  transition={{
                    delay: i * 0.2,
                    duration: 1.8,
                    repeat: Infinity,
                    repeatType: "mirror"
                  }}
                >
                  💕
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ReconsiderModal open={openModal} onClose={()=>setOpenModal(false)}/>
    </div>
  );
}
