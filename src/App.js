import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import profile from "./profile.jpg";

/* -------- Typing Animation -------- */

const subtitle = "B.Tech CSE Student | AI & ML Enthusiast";

function TypingText() {
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;

    const typing = setInterval(() => {
      setText(subtitle.slice(0, i));
      i++;

      if (i > subtitle.length) clearInterval(typing);
    }, 70);

    return () => clearInterval(typing);
  }, []);

  return <span>{text}</span>;
}

/* -------- Name Animation -------- */

const name = "ARNAV ARYA";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
};

const letter = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function App() {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen overflow-x-hidden">

      {/* HERO */}
      <section className="text-center py-32 px-6">

        {/* Avatar with Aura */}
       <div className="relative w-36 h-30 mx-auto mb-15">

  {/* PURPLE AURA */}
  <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-30 animate-pulse rounded-full"></div>

  {/* BLUE AURA */}
  <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 animate-pulse rounded-full"></div>

  {/* IMAGE CONTAINER */}
  <div className="relative w-full h-full rounded-3xl border border-white/10 overflow-hidden shadow-xl">

    <img
      src={profile}
      alt="Arnav Arya"
      className="w-full h-full object-cover object-top"
    />

  </div>

</div>

        {/* Animated Name */}
        <motion.h1
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="text-7xl md:text-8xl font-black mb-6 tracking-tight"
        >
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letter}
              className="inline-block"
              whileHover={{ scale: 1.2 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Typing subtitle */}
        <p className="text-2xl text-blue-400 font-medium">
          <TypingText />
        </p>

      </section>

      {/* ABOUT */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="py-24 px-6"
      >

        <div className="max-w-4xl mx-auto bg-[#1e293b] rounded-3xl p-12 border border-white/10">

          <h2 className="text-4xl font-bold mb-6 text-center">
            About Me
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed text-center">
            Hello! I'm <span className="text-white font-semibold">Arnav Arya</span>,
            a second-year B.Tech Computer Science student specializing in
            Artificial Intelligence and Machine Learning.
            <br /><br />
            I enjoy building modern web applications, solving coding challenges
            and exploring new technologies.
          </p>

        </div>

      </motion.section>

      {/* STATS */}
      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

          {[
            { num: "3+", label: "Projects" },
            { num: "10+", label: "Technologies" },
            { num: "2", label: "Years Study" },
            { num: "500+", label: "Hours Coding" }
          ].map((item, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="bg-[#1e293b] p-10 rounded-3xl border border-white/10 text-center shadow-lg"
            >

              <h3 className="text-5xl font-black text-blue-400">
                {item.num}
              </h3>

              <p className="text-gray-400 mt-2 text-lg">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* SOCIAL LINKS */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="py-24 text-center"
      >

        <h2 className="text-4xl font-bold mb-10">
          Connect With Me
        </h2>

        <div className="flex justify-center flex-wrap gap-6">

          <a
            href="https://github.com/YOUR_GITHUB"
            className="flex items-center gap-3 bg-[#1e293b] px-6 py-4 rounded-xl hover:bg-[#334155]"
          >
            <Github /> GitHub
          </a>

          <a
            href="https://instagram.com/YOUR_INSTAGRAM"
            className="flex items-center gap-3 bg-[#1e293b] px-6 py-4 rounded-xl hover:bg-pink-500/20"
          >
            <Instagram /> Instagram
          </a>

          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            className="flex items-center gap-3 bg-[#1e293b] px-6 py-4 rounded-xl hover:bg-blue-500/20"
          >
            <Linkedin /> LinkedIn
          </a>

          <a
            href="https://discord.com/users/YOUR_DISCORD_ID"
            className="flex items-center gap-3 bg-[#1e293b] px-6 py-4 rounded-xl hover:bg-indigo-500/20"
          >
            💬 Discord
          </a>

          <a
            href="mailto:youremail@gmail.com"
            className="flex items-center gap-3 bg-[#1e293b] px-6 py-4 rounded-xl hover:bg-green-500/20"
          >
            <Mail /> Email
          </a>

        </div>

      </motion.section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500">
        CRAFTED WITH PASSION - Arnav Arya © 2026
      </footer>

    </div>
  );
}
