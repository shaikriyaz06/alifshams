import React, { useEffect, useState, useRef } from "react";
import heroVideo from "./assets/hero_video.mp4";
import { motion, useScroll, useAnimation, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Masonry from "@mui/lab/Masonry";
import Paper from "@mui/material/Paper";
import telcomImage from "../src/assets/telcom.avif";
import healthcare from "../src/assets/healthcare.avif";
import banking from "../src/assets/banking1.avif";
import software from "../src/assets/software.avif";
import education from "../src/assets/education.avif";
import { styled } from "@mui/material/styles";

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
  const industries = [
    {
      title: "Telecom",
      icon: "📡",
      img: telcomImage,
      description:
        "Innovative solutions for telecommunications infrastructure and services",
      to: "/telecom",
      color: "blue",
    },
    {
      title: "Healthcare",
      icon: "🏥",
      img: healthcare,
      description:
        "Digital transformation in healthcare delivery and management",
      to: "/healthcare",
      color: "green",
    },
    {
      title: "Banking & Finance",
      icon: "🏦",
      img: banking,
      description: "Secure and efficient financial technology solutions",
      to: "/banking",
      color: "purple",
    },
    {
      title: "IT & Software",
      icon: "💻",
      img: software,
      description: "Cutting-edge software development and IT services",
      to: "/it-software",
      color: "pink",
    },
    {
      title: "Education",
      icon: "🎓",
      img: education,
      description: "Modern educational technology and learning platforms",
      to: "/education",
      color: "yellow",
    },
  ];
  const heights = [250, 300, 620, 350, 300];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent", // <- you may have missed this
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: "center",
    width: "100px",
    color: (theme.vars || theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));
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
                  <p className="text-[#B31F7E] text-xl">Diagram Placeholder</p>
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
            className="py-10 px-32 text-white w-full z-20 relative bg-gradient-to-b from-[#B31F7E] via-blue-400 to-purple-600"
            style={{ y: translateY }}
            ref={industriesRef}
          >
            <h2 className="text-4xl font-bold text-center mb-4 text-white">
              Industries
            </h2>
            <Masonry
              columns={3}
              spacing={2}
              defaultHeight={450}
              defaultColumns={3}
              defaultSpacing={1}
              sequential
            >
              {industries.map((item, index) => (
                <Item
                  key={index}
                  sx={{
                    height: heights[index % heights.length],
                    boxShadow: "none",
                  }}
                >
                  <div className="relative h-full w-full overflow-hidden cursor-pointer rounded-xl group flip-card">
                    <div className="flip-inner w-full h-full">
                      {/* Front */}
                      <div className="flip-front w-full h-full">
                        <img
                          src={item.img}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80 z-10" />
                        <div className="absolute bottom-2 left-3 text-white font-semibold text-xl z-20 text-center">
                          {item.title}
                        </div>
                      </div>

                      {/* Back */}
                      <div className="flip-back w-full h-full rotate-y-180 absolute top-0 left-0 flex flex-col items-center text-white text-sm px-4 py-6">
                        <h3 className="text-lg font-bold mb-4 text-white border-b-2 border-white">
                          {item.title}
                        </h3>
                        <div className="flex-1 flex items-start justify-center">
                          <p className="text-center mb-1white">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Item>
              ))}
            </Masonry>
          </motion.section>
        </div>
      </div>
    </>
  );
}
