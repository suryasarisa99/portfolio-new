﻿/**
 * Copyright (c) 2025 Sarisa Jaya Surya
 *
 * This file is part of a proprietary project and is governed by the terms in LICENSE.
 * Unauthorized use, modification, or distribution is prohibited. All rights reserved.
 * For permissions, contact yanis.sebastian.zuercher@gmail.com
 */

/* This is the main page, therefore called index */

import { Link } from "react-router-dom";
import { Mail, Linkedin, ArrowRight, ChevronRight } from "lucide-react";
import { FaGithubAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { useLanguage } from "../lib/language-provider";
import { translations } from "../lib/translations";
import { CyclingTextEffect } from "../components/ui/text-effect-wrapper";
import { SiChessdotcom, SiHackthebox, SiLeetcode } from "react-icons/si";
import { Button } from "@/components/ui/button";
import Navigation from "../components/Navigation";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import ParticleBackground from "../components/ParticleBackground";
import {
  containerVariants,
  itemVariants,
  titleVariants,
  usePageInit,
} from "@/utils/transitions";
import { Helmet } from "react-helmet-async";
import { NameMorpher } from "../components/NameMorpher";
import Threads from "../components/Threads";
import Squares from "../components/Squares";
import Aurora from "../components/Aurora";

const Index = () => {
  const isLoaded = usePageInit(50);
  const [key, setKey] = useState(0);
  const { language } = useLanguage();
  const t = translations[language];

  const descriptions = [
    (t.index as any).description1,
    (t.index as any).description2,
    (t.index as any).description3,
    (t.index as any).description4,
  ];

  /* remove for now
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };
  */

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [language]);

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div
          className="flex flex-col h-screen relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Helmet>
            <title>Sarisa Jaya Surya</title>
          </Helmet>

          {/* Aurora Background, remove for now
          <div className="absolute inset-0 z-[1]">
            <Aurora
              colorStops={["#6AD3B0", "#8FDBE2", "#C4A8FF"]} // hm:
              blend={0.5}
              amplitude={0.5}
              speed={0.3}
            />
          </div>
          */}

          {/*Squares background, remove for now*/}
          <div className="absolute inset-0 z-[1]">
            <Squares speed={0.1} squareSize={40} direction="diagonal" />
          </div>

          {/* Threads background, remove for now
          <div className="absolute inset-0 z-[1] pointer-events-none">
            <div className="w-full h-full pointer-events-auto">
              <Threads
                amplitude={1.5}
                distance={0.1}
                enableMouseInteraction={true}
              />
            </div>
          </div>
          */}

          {/* Particle background, remove for now
          <ParticleBackground particlesInit={particlesInit}/>
          */}

          <div className="flex-1 p-5 sm:p-6 md:p-8 lg:p-12 pt-16 sm:pt-18 md:pt-20 flex flex-col relative z-20">
            <div className="max-w-7xl mx-auto w-full flex flex-col h-full">
              <div className="mb-8 sm:mb-10 md:mb-14 lg:mb-16">
                <Navigation />
              </div>

              {/* Hero section | head */}
              <div className="flex-1 flex flex-col justify-center items-start">
                <div className="flex flex-col">
                  <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl ml-0">
                    <motion.h1
                      variants={titleVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6"
                    >
                      <NameMorpher greeting={`${t.index.greeting}\u00A0`} />
                    </motion.h1>

                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-foreground/70 leading-relaxed mb-4 sm:mb-5 md:mb-8 text-base sm:text-lg md:text-xl max-w-2xl md:max-w-3xl lg:max-w-4xl"
                    >
                      <CyclingTextEffect
                        texts={descriptions}
                        per="char"
                        preset="blur"
                        delay={0.1}
                        speedReveal={4}
                        displayDuration={3000}
                      />
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex flex-wrap gap-3 mb-6 sm:mb-8"
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <Link to="/contact">
                          <Button
                            variant="default"
                            size="default"
                            className="group border-foreground/20"
                          >
                            <span className="flex items-center">
                              {t.index.contactMe}
                              <ChevronRight
                                className="w-4 h-4 ml-2 transition-transform duration-300
                                                group-hover:translate-x-1"
                              />
                            </span>
                          </Button>
                        </Link>
                        <Link to="/projects">
                          <Button
                            variant="outline"
                            size="default"
                            className="group border-foreground/20"
                          >
                            <span className="flex items-center">
                              {t.index.viewProjects}
                              <ChevronRight
                                className="w-4 h-4 ml-2 transition-transform duration-300
                                                group-hover:translate-x-1"
                              />
                            </span>
                          </Button>
                        </Link>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex flex-wrap items-center gap-3 sm:gap-4 mb-0"
                    >
                      {[
                        {
                          href: "https://github.com/suryasarisa99",
                          icon: <FaGithubAlt className="w-full h-full" />,
                          label: "GitHub",
                          hoverClass: "hover:border-foreground/30",
                        },
                        {
                          href: "mailto:suryasarisa99@gmail.com",
                          icon: <Mail className="w-full h-full" />,
                          label: "Email",
                          hoverClass:
                            "hover:bg-red-400/20 hover:border-red-400/30",
                        },
                        {
                          href: "https://www.linkedin.com/in/surya-sarisa/",
                          icon: <Linkedin className="w-full h-full" />,
                          label: "LinkedIn",
                          hoverClass:
                            "hover:bg-cyan-400/20 hover:border-cyan-400/30",
                        },
                        {
                          icon: <SiLeetcode className="w-full h-full" />,
                          href: "https://leetcode.com/u/suryasarisa/",
                          label: "LeetCode",
                          hoverClass:
                            "hover:bg-orange-400/20 hover:border-orange-400/30",
                        },
                        // {
                        //   icon: <SiHackthebox className="w-full h-full" />,
                        //   href: "https://app.hackthebox.com/profile/2350832",
                        //   label: "Hack The Box",
                        //   hoverClass:
                        //     "hover:bg-emerald-300/20 hover:border-emerald-400/30",
                        // },
                        // {
                        //   href: "https://chess.com/member/moment_o",
                        //   icon: <SiChessdotcom className="w-full h-full" />,
                        //   label: "Chess.com",
                        //   hoverClass:
                        //     "hover:bg-green-400/20 hover:border-green-400/30",
                        // },
                      ].map((social, index) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group relative inline-block rounded-full border border-foreground/10 bg-foreground/5 shadow-sm text-foreground/60 hover:text-foreground transition-all duration-500 ease-out overflow-hidden ${
                            social.hoverClass
                          }
                            w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12
                            ${
                              social.label === "LeetCode"
                                ? "md:hover:[width:8rem] lg:hover:[width:8rem]"
                                : social.label.length <= 5
                                  ? "md:hover:[width:6.3rem] lg:hover:[width:6.3rem] "
                                  : social.label.length <= 7
                                    ? "md:hover:[width:6.8rem] lg:hover:[width:6.8rem]"
                                    : social.label.length <= 8
                                      ? "md:hover:[width:7.5rem] lg:hover:[width:7.5rem]"
                                      : social.label.length <= 10
                                        ? "md:hover:[width:8.5rem] lg:hover:[width:8.5rem]"
                                        : "md:hover:[width:9.5rem] lg:hover:[width:9.5rem]"
                            }
                          `}
                        >
                          {/* fuckass css to center PIXEL PERFECT INSIDE A CONTAINER CAUSE IT WONT LET ME DO IT NORMALLY. */}
                          <div className="absolute left-[9.47px] sm:left-[11.47px] top-[0.6rem] sm:top-[0.7rem] w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center z-10">
                            {social.icon}
                          </div>

                          {/* fuckass glassmorphism effect */}
                          <div className="hidden md:block absolute left-12 right-1 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                            <span className="text-sm font-medium whitespace-nowrap opacity-0 blur-sm transform translate-x-4 group-hover:opacity-100 group-hover:blur-none group-hover:translate-x-0 transition-all duration-500 ease-out delay-100">
                              {social.label}
                            </span>
                          </div>

                          {/*  */}
                          <span className="md:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 rounded-md bg-foreground/10 backdrop-blur-sm whitespace-nowrap pointer-events-none">
                            {social.label}
                          </span>
                        </a>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;
