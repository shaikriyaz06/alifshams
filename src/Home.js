import React, { useEffect, useState, useRef } from "react";
import heroVideo from "./assets/hero_video.mp4";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const sectionRef = useRef(null);
  const newsRef = useRef(null);
  const industriesRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "center start"],
  });
  const { scrollYProgress: newsScrollProgress } = useScroll({
    target: newsRef,
    offset: ["end end", "end start"],
  });
  const leftX = useTransform(scrollYProgress, [0, 1], ["70px", "-50px"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["-50px", "70px"]);
  const translateY = useTransform(newsScrollProgress, [0, 0], ["0%", "0%"]);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[calc(100vh-73px)] mt-[73px]">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-fill"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center bg-black/60 px-8 text-center">
          <h1 className="mb-4 font-sans text-5xl font-extrabold text-white md:text-6xl lg:text-7xl">
            Welcome to <span className="text-white">ALIF</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-white md:text-xl lg:text-2xl">
            Transforming ideas into reality through innovation and excellence
          </p>
          <button className="mt-8 px-8 py-3 bg-[#B31F7E] text-white font-medium rounded-xl hover:bg-[#482A7A] transition-colors">
            Discover More
          </button>
        </div>
        {/* #test */}
      </div>
      <div>
        <section
          className="py-10 bg-[#ffffff] text-[#4b535d] relative overflow-hidden z-10"
          ref={sectionRef}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl text-[#B31F7E] font-bold text-center mb-4">
              The ALIF Approach
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-12"></div>

            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div className="w-full md:w-1/2" style={{ x: leftX }}>
                <h3 className="text-2xl font-bold mb-4 text-[#B31F7E]">
                  Our Methodology
                </h3>
                <p className="text-lg mb-6 text-black leading-relaxed">
                  The ALIF Approach represents our comprehensive methodology for
                  delivering exceptional results. Our process combines
                  innovative thinking with proven strategies to transform
                  challenges into opportunities.
                </p>
                <p className="text-lg text-black  leading-relaxed">
                  We focus on understanding your unique needs, developing
                  tailored solutions, and implementing them with precision to
                  ensure maximum impact and value.
                </p>
                <button className="mt-6 px-6 py-2 bg-[#B31F7E] text-white font-medium rounded-md hover:bg-emerald-600 transition-colors">
                  Learn More
                </button>
              </motion.div>

              <motion.div
                className="w-full md:w-1/2 mt-8 md:mt-0"
                style={{ x: rightX }}
              >
                <div className="h-80 bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl border border-emerald-900/30 shadow-xl flex items-center justify-center">
                  <p className="text-[#B31F7E] text-xl">
                    Diagram Placeholder
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <div className="relative">
          <section
            className="sticky top-[73px] z-10 bg-gradient-to-b from-black via-[#202020] to-[#808080]"
            ref={newsRef}
          >
            <div className="container mx-auto px-4 py-10 ">
              <h2 className="text-4xl font-bold text-center mb-4 text-white">
                Latest News & Bytes
              </h2>
              <div className="w-24 h-1 bg-emerald-500 mx-auto mb-12"></div>

              {/* Your extra text */}
              <div className="text-white text-center text-lg max-w-3xl mx-auto">
                <p className="mb-3">
                  Our people are our greatest strength. Over 100 specialists
                  around the world, our team works tirelessly to support clients
                  irrespective of time zone.
                </p>
                <p className="mb-3">
                  We create and implement award-winning marketing, lead
                  generation and sales strategies. And we're 100% in-house.
                </p>
                <p>
                  Let us take your business to the next level. Dubai. New York.
                  London. Melbourne.
                </p>
              </div>
            </div>
          </section>

          <motion.section
            className="py-10 text-white w-full z-20 relative bg-gradient-to-b from-black via-black to-[#808080]"
            style={{ y: translateY }}
            ref={industriesRef}
          >
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-4">
                Industries We Serve
              </h2>
              <div className="w-24 h-1 bg-emerald-400 mx-auto mb-12"></div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
                <div className="p-6 bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl border border-emerald-900/30 hover:border-emerald-500/50 transition-all duration-300 pointer-events-auto">
                  <div className="h-20 w-20 mx-auto mb-4 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl text-emerald-400">🏥</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Healthcare</h3>
                  <p className="text-gray-300 text-sm">
                    Innovative solutions for modern healthcare challenges
                  </p>
                </div>
                <div className="p-6 bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl border border-emerald-900/30 hover:border-emerald-500/50 transition-all duration-300 pointer-events-auto">
                  <div className="h-20 w-20 mx-auto mb-4 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl text-emerald-400">🏥</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Healthcare</h3>
                  <p className="text-gray-300 text-sm">
                    Innovative solutions for modern healthcare challenges
                  </p>
                </div>

                <div className="p-6 bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl border border-emerald-900/30 hover:border-emerald-500/50 transition-all duration-300 pointer-events-auto">
                  <div className="h-20 w-20 mx-auto mb-4 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl text-emerald-400">💰</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Finance</h3>
                  <p className="text-gray-300 text-sm">
                    Secure and efficient financial technology solutions
                  </p>
                </div>

                <div className="p-6 bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl border border-emerald-900/30 hover:border-emerald-500/50 transition-all duration-300 pointer-events-auto">
                  <div className="h-20 w-20 mx-auto mb-4 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl text-emerald-400">💻</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Technology</h3>
                  <p className="text-gray-300 text-sm">
                    Cutting-edge solutions for tech industry leaders
                  </p>
                </div>

                <div className="p-6 bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl border border-emerald-900/30 hover:border-emerald-500/50 transition-all duration-300 pointer-events-auto">
                  <div className="h-20 w-20 mx-auto mb-4 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl text-emerald-400">🏭</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Manufacturing</h3>
                  <p className="text-gray-300 text-sm">
                    Optimizing processes for manufacturing excellence
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}
