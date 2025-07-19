import React, { useEffect, useState, useRef } from "react";
import heroVideo from "./assets/hero_video.mp4";
import { motion, useScroll, useAnimation, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import Masonry from "@mui/lab/Masonry";
import Paper from "@mui/material/Paper";
import telcomImage from "../src/assets/telcom.jpg";
import proptechImage from "../src/assets/Prop-tech.jpg";
// import healthcare from "../src/assets/healthcare.avif";
import banking from "../src/assets/banking1.avif";
import software from "../src/assets/software.avif";
import education from "../src/assets/education.avif";
import { styled } from "@mui/material/styles";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import industriesImage from "../src/assets/background4.jpg";
import backgroundImage4 from "../src/assets/background2.jpg";
import backgroundImage1 from "../src/assets/background4.jpg";
import domainsImage from "../src/assets/Domains.jpg";
import healthCare from "../src/assets/healthCare.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";
import Carouselcomponent from "./carousel";
import { Link } from "react-router-dom";
const engagementPhases = [
  { title: "1. Discover", description: "Assess needs, baseline KPIs" },
  { title: "2. Design", description: "Co-create blueprints & use cases" },
  { title: "3. Develop", description: "Agile prototyping & MVP builds" },
  { title: "4. Deploy", description: "Launch & onboard systems" },
  { title: "5. Enable", description: "Train users & embed governance" },
  { title: "6. Evolve", description: "Continuously optimize" },
];

const slides = engagementPhases.map((phase, i) => (
  <motion.div
    key={i}
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-xl shadow-xl p-6 w-80 h-60 flex flex-col justify-center items-center text-center"
  >
    <h3 className="text-xl font-semibold text-blue-700 mb-2">{phase.title}</h3>
    <p className="text-gray-600">{phase.description}</p>
  </motion.div>
));
const carousel = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

export default function Home() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  const sectionRef = useRef(null);
  const newsRef = useRef(null);
  const industriesRef = useRef(null);
  const glideRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "center start"],
  });

  const { scrollYProgress: newsScrollProgress } = useScroll({
    target: newsRef,
    offset: ["end end", "end start"],
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const leftX = useTransform(scrollYProgress, [0, 1], ["70px", "-50px"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["-50px", "70px"]);
  const translateY = useTransform(newsScrollProgress, [0, 0], ["0%", "0%"]);
  const industries = [
    {
      title: "Telecom",
      icon: "📡",
      img: telcomImage,
      description:
        "Deploy customer churn prediction, AI for call routing, fraud detection, network optimization, and predictive maintenance for telecom giants.",
      to: "/telecom",
      color: "blue",
    },
    {
      title: "Healthcare",
      icon: "🏥",
      img: healthCare,
      description:
        "Support health systems, hospitals, and startups with AI-driven diagnostics, virtual health platforms, operational analytics, and secure data governance models.",
      to: "/healthcare",
      color: "green",
    },
    {
      title: "Banking & Finance",
      icon: "🏦",
      img: banking,
      description:
        "Partner with banks and fintechs to deliver robo-advisory systems, fraud detection, credit risk scoring, and AI-driven personal finance platforms.",
      to: "/banking",
      color: "purple",
    },
    {
      title: "IT & Software",
      icon: "💻",
      img: software,
      description:
        "Assist product companies and service providers in embedding AI into software delivery, DevOps, product lifecycle, and customer support using cloud-native and AI-first tooling.",
      to: "/it-software",
      color: "pink",
    },
    {
      title: "Education",
      icon: "🎓",
      img: education,
      description:
        "Co-create AI-enabled learning platforms, adaptive assessments, digital classrooms, and tools for remote education delivery with robust data insights.",
      to: "/education",
      color: "yellow",
    },
    {
      title: "PropTech",
      icon: "🏢",
      img: proptechImage, // make sure you have an appropriate image imported as `proptechImage`
      description:
        "Leverage AI for property valuation, smart tenant analytics, predictive maintenance, digital leasing, and real-time market intelligence to transform real estate operations.",
      to: "/proptech",
      color: "emerald", // or choose another Tailwind color like teal, indigo, etc.
    },
  ];
  const heights = [250, 300, 250, 350, 300, 350];

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
  const cards = [
    {
      title: "🤖 AI Consulting",
      link: "/solutions/AIConsulting",
      points: [
        "AI Strategy - Development & Implementation",
        "Custom AI Development",
        "Generative AI Development & Services",
        "Agentic AI",
        "Ethical AI and Compliance",
        "AI Research & Training",
      ],
      content:
        "We enable organizations to leverage Artificial Intelligence not just as a technology but as a strategic enabler. Our approach blends AI engineering, ethics, and business alignment.",
    },
    {
      title: "📊 Business & Technology Consulting",
      link: "/solutions/business-technology",
      points: [
        "Microsoft-related Services",
        "Website Design & Development",
        "Cloud Solutions",
        "Cybersecurity",
        "Strategy & Digital Transformation",
        "Governance, Risk & Compliance",
      ],
      content:
        "We help enterprises optimize their digital backbone, making them agile, compliant, and customer-centric.",
    },
    {
      title: "📈 Digital Marketing",
      link: "/solutions/digital-marketing",
      points: [
        "Demand Generation & Sales Pipelines",
        "SEO",
        "Social Media Marketing (SMM)",
        "Email & Content Marketing",
        "Video Marketing",
        "Influencer Marketing",
      ],
      content:
        "We use data, creativity, and technology to power marketing that delivers measurable demand and brand equity.",
    },
  ];
  const [sliderInstanceRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
    slideChanged(s) {
      // log when needed
    },
  });

  const goToSlide = (index) => {
    if (slider.current) {
      slider.current.moveToSlideRelative(index);
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${backgroundImage1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
      }}
    >
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
          <h1 data-aos="fade-right" className="mb-4 font-sans text-5xl font-extrabold text-white md:text-6xl lg:text-7xl">
            Welcome to <span className="text-white">ALIF</span>
          </h1>
          <p data-aos="fade-left" className="mx-auto max-w-3xl text-lg text-white md:text-xl lg:text-2xl">
            Transforming ideas into reality through innovation and excellence
          </p>
          <Link to="/solutions/AIConsulting/AIstrategy">
            <button className="mt-8 px-8 py-3 bg-[#B31F7E] text-white font-medium rounded-xl hover:bg-[#482A7A] transition-colors">
              Discover More
            </button>
          </Link>
        </div>
      </div>
      <div>
        <div >
          <Carouselcomponent />
        </div>

        <div data-aos="fade-up" className="relative">
          <section
            className="z-10 px-10 pb-10"
            ref={newsRef}
            style={{
              // backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${domainsImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "repeat",
            }}
          >
            <div data-aos="fade-up" className="container mx-auto px-4 py-10 ">
              <h2  className="text-4xl text-[#B31F7E] font-bold text-center mb-4">
                Our Domains
              </h2>
              <div className="w-24 h-1 bg-white mx-auto"></div>
            </div>
            <Swiper
              effect="coverflow"
              grabCursor={true}
              slidesPerView={3}
              centeredSlides={true}
              initialSlide={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              loopedSlides={3}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow, Autoplay, Navigation]}
            >
              {[...cards, ...cards].map((card, index) => {
                const gradients = [
                  "bg-gradient-to-br from-[#B31F7E] to-[#482A7A]",
                  "bg-gradient-to-br from-[#3B82F6] to-[#1E40AF]",
                  "bg-gradient-to-br from-[#10B981] to-[#047857]",
                ];
                return (
                  <SwiperSlide key={index}>
                    <div
                      className={`${
                        gradients[index % 3]
                      } text-white rounded-xl shadow-lg h-[400px] p-5 flex flex-col items-start justify-center text-left border border-gray-300`}
                    >
                      <h3 className="text-xl font-bold mb-3 uppercase">
                        {card.title}
                      </h3>
                      <p className="text-sm justify-center">{card.content}</p>
                      <br />
                      <ul className="list-disc ml-5 space-y-2 text-sm">
                        {card.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                      <Link to={card.link}>
                        <button className="mt-4 text-sm bg-white text-[#B31F7E] font-bold px-4 py-2 rounded hover:bg-purple-100 transition-all">
                          Know More →
                        </button>
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </section>
          <div
            style={{
              // backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${backgroundImage1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "repeat",
            }}
          >
            <motion.section data-aos="fade-up" className="py-10 px-20 text-white w-full z-20 relative">
              <h2 className="text-4xl font-bold text-center mb-4 text-[#B31F7E]">
                Industries
              </h2>
              <div className="w-24 h-1 bg-white mx-auto"></div>
              <Masonry
                columns={3}
                spacing={2}
                defaultHeight={450}
                defaultColumns={3}
                defaultSpacing={1}
                sequential
                className="py-2"
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
                        <div
                          className={`flip-back flip-back-${index} w-full h-full rotate-y-180 absolute top-0 left-0 flex flex-col items-center text-white text-sm px-4 py-6`}
                        >
                          <h3 className="text-lg font-bold mb-4 text-white border-b-2 border-white">
                            {item.title}
                          </h3>
                          <div className="flex-1 flex items-start justify-center">
                            <p className="text-center mb-1 text-white">
                              {item.description}
                            </p>
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

        {/* Why Join Us Section */}
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${backgroundImage4})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
          }}
        >
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-4 text-[#B31F7E]">
                Why Alif Shams?
              </h2>
              <div className="w-24 h-1 bg-white mx-auto mb-12"></div>

              <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
                {/* Benefits & Perks */}
                <div className="text-white text-left flex-1">
                  {/* <div className="text-4xl mb-4">💰</div> */}
                  <h3 className="text-2xl font-semibold mb-4 text-[#B31F7E]">
                    Benefits & Perks
                  </h3>
                  <ul className="text-gray-300 space-y-3 text-left inline-block">
                    <li>
                      • Market-aligned compensation with performance rewards
                    </li>
                    <li>• Remote/hybrid flexibility</li>
                    <li>• Annual learning budgets (AI, Cloud, DevSecOps)</li>
                    <li>• Mental health & wellness support</li>
                  </ul>
                </div>

                {/* Vertical Line */}
                <div className="hidden md:block w-px h-64 bg-white"></div>

                {/* Career Opportunities */}
                <div className="text-white text-left flex-1">
                  {/* <div className="text-4xl mb-4">🚀</div> */}
                  <h3 className="text-2xl font-semibold mb-4 text-[#B31F7E]">
                    Career Opportunities
                  </h3>
                  <ul className="text-gray-300 space-y-3 text-left inline-block">
                    <li>
                      • Work on breakthrough GenAI and enterprise AI projects
                    </li>
                    <li>
                      • Opportunity to lead transformation mandates across
                      sectors
                    </li>
                    <li>
                      • Accelerated growth from contributor to practice leader
                    </li>
                    <li>
                      • Open roles in consulting, engineering, marketing, and
                      product strategy
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="py-16 bg-gradient-to-r from-[#482A7A] to-[#B31F7E]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-12"></div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h3 className="text-2xl font-semibold mb-6">Ready to Transform Your Business?</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">📧</span>
                    <span>contact@alif.com</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">📞</span>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-4">📍</span>
                    <span>123 Innovation Street, Tech City</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-xl">
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B31F7E]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B31F7E]"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B31F7E]"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-[#B31F7E] text-white py-3 rounded-lg font-semibold hover:bg-[#482A7A] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section> */}
          <section
            className="py-16"
            // style={{
            //   backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${backgroundImage1})`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            //   backgroundRepeat: "repeat",
            // }}
          >
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Ready to Transform Your Business?
              </h2>
              <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                Join thousands of companies who trust ALIF to drive their
                digital transformation and achieve exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="px-8 py-4 bg-white text-[#B31F7E] font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                    Contact Us Now
                  </button>
                </Link>
                <Link to="solutions/AIConsulting">
                  <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#B31F7E] transition-colors">
                    Explore Services
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
