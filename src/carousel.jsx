import React, { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, useScroll, useAnimation, useTransform } from "framer-motion";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
// import backgroundImage1 from "../src/assets/industries1.png";
import backgroundImage1 from "../src/assets/background4.jpg";
const carouselData = [
  {
    id: "Discover",
    title: "Discover",
    content:
      "Conduct in-depth assessments to identify business challenges, understand stakeholder expectations, audit current systems, and establish baseline KPIs to measure the success of future implementations.",
  },
  {
    id: "Design",
    title: "Design",
    content:
      "Collaboratively design solution blueprints and target architectures by aligning on user needs, defining clear use cases, mapping out data flows, and setting the foundation for scalable implementation.",
  },
  {
    id: "Develop",
    title: "Develop",
    content:
      "Use agile methodologies to build and test prototypes, iterate based on stakeholder feedback, and incrementally develop minimum viable products (MVPs) with a focus on rapid value delivery.",
  },
  {
    id: "Deploy",
    title: "Deploy",
    content:
      "Ensure seamless integration into existing environments by conducting user acceptance testing, finalizing deployment pipelines, managing cutover activities, and launching production-ready solutions with minimal disruption.",
  },
  {
    id: "Enable",
    title: "Enable",
    content:
      "Equip end-users and administrators through comprehensive training, develop support and escalation protocols, and embed governance policies to ensure effective and sustainable adoption of the solution.",
  },
  {
    id: "Evolve",
    title: "Evolve",
    content:
      "Continuously assess system performance, gather user feedback, analyze key metrics, and implement iterative improvements to adapt the solution to evolving business needs and drive long-term value.",
  },
];

export default function CarouselSliderTailwind() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = carouselData.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // const getPositionClass = (index) => {
  //   if (index === activeIndex)
  //     return "z-20 scale-100 translate-x-0 opacity-100";
  //   if (index === (activeIndex + 1) % total)
  //     return "z-10 scale-75 translate-x-[60%] opacity-70";
  //   if (index === (activeIndex - 1 + total) % total)
  //     return "z-10 scale-75 -translate-x-[60%] opacity-70";
  //   return "z-0 scale-75 translate-x-0 opacity-0";
  // };
  const getCardStyles = (index) => {
    if (index === activeIndex)
      return {
        position: "z-20 scale-100 translate-x-0 opacity-100",
        bg: "bg-purple-600",
      };
    if (index === (activeIndex + 1) % total)
      return {
        position: "z-10 scale-75 translate-x-[60%] opacity-100",
        bg: "bg-[#B31F7E]",
      };
    if (index === (activeIndex - 1 + total) % total)
      return {
        position: "z-10 scale-75 -translate-x-[60%] opacity-100",
        bg: "bg-[#B31F7E]",
      };
    return {
      position: "z-0 scale-75 translate-x-0 opacity-0",
      bg: "bg-gray-100",
    };
  };

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "center start"],
  });
  const leftX = useTransform(scrollYProgress, [0, 1], ["70px", "-50px"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["-50px", "70px"]);
  // const translateY = useTransform(newsScrollProgress, [0, 0], ["0%", "0%"]);
  return (
    <section
      className="w-full py-10 "
      ref={sectionRef}
      // style={{
      //   backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${backgroundImage1})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "repeat",
      //   backgroundAttachment: "fixed",
      // }}
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto h-auto px-4">
        <h2
          data-aos="flip-up"
          className="text-4xl font-heading font-semibold mb-2 text-center text-[#B31F7E] tracking-tight"
        >
          The ALIF Approach - 4D2E
        </h2>
        <div className="grid grid-cols-2 gap-24 py-4">
          {/* LEFT: List */}

          <motion.div data-aos="fade-left" style={{ x: leftX }}>
            <div className="text-left mb-6 tex">
              <p className="text-2xl text-[#B31F7E] font-heading font-semibold tracking-tight uppercase">
                Our 6-Phase Engagement Model
              </p>
            </div>

            <ul className="space-y-2">
              {carouselData.map((item, index) => (
                <li
                  key={item.id}
                  className={`group transition-all duration-300 ${
                    index === activeIndex
                      ? "text-[#B31F7E] text-xl font-semibold"
                      : "text-white"
                  }`}
                >
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveIndex(index);
                    }}
                    className="inline-flex items-center gap-2 transition-all duration-300"
                  >
                    <span
                      className={`transition-all duration-300 ${
                        index === activeIndex
                          ? "text-[#B31F7E] text-xl"
                          : "text-white text-lg"
                      }`}
                    >
                      ➤
                    </span>
                    <span className="font-body font-medium whitespace-nowrap tracking-wide uppercase">
                      Phase {index + 1}: {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT: Carousel */}
          <motion.div data-aos="fade-right" style={{ x: rightX }}>
            {/* <div className="text-center mb-4">
              <h3 className="text-xl font-semibold text-[#B31F7E]">
                We work as your transformation partner by combining:
                <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside inline-block text-left">
                  <li>Business outcome-first thinking</li>
                  <li>Agile delivery models</li>
                  <li>Global innovation, local execution</li>
                  <li>Ethical frameworks for AI and tech</li>
                </ul>
              </h3>
              <p className="text-gray-600 text-sm">
                Click phases to explore details
              </p>
            </div> */}

            <div className="relative flex items-center justify-center h-[350px] overflow-hidden">
              {carouselData.map((item, index) => {
                const { position, bg } = getCardStyles(index);
                return (
                  <div
                    key={item.id}
                    className={`absolute h-full transition-all duration-700 ease-in-out transform w-[50%] ${bg} rounded-xl shadow-xl px-2 py-2 text-center ${position}`}
                  >
                    <div className="flex items-center justify-between h-full">
                      {/* Left Arrow */}
                      <button
                        onClick={handlePrev}
                        className="text-white hover:text-gray-200 text-2xl transition-colors"
                      >
                        <MdArrowBackIos />
                      </button>

                      <div className="flex-1 px-2">
                        <h3 className="text-2xl text-left font-heading font-semibold text-white mb-4 tracking-tight uppercase">
                          {item.title}
                        </h3>
                        <p className="text-white !justify-center !text-left text-[13px] mb-6 font-body leading-relaxed">
                          {item.content}
                        </p>
                      </div>

                      {/* Right Arrow */}
                      <button
                        onClick={handleNext}
                        className="text-white hover:text-gray-200 text-2xl transition-colors"
                      >
                        <MdArrowForwardIos />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
