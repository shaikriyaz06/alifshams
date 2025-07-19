import React from "react";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaRocket,
  FaGlobe,
  FaShieldAlt,
  FaHandshake,
} from "react-icons/fa";
import heroImage from "./assets/industries1.png";
import aboutImage from "./assets/software.avif";

const About = () => {
  const whoWeArePoints = [
    "Leading technology solutions provider",
    "Dedicated to transforming businesses through innovation",
    "Trusted partner for organizations worldwide",
    "Expertise in AI consulting and business transformation",
    "Helping companies embrace the future of technology",
    "Committed to sustainable growth across industries",
  ];

  const coreValuesData = [
    {
      icon: <FaBullseye />,
      title: "Business Outcome-First",
      description: "Business outcome-first thinking",
    },
    {
      icon: <FaRocket />,
      title: "Agile Delivery",
      description: "Agile delivery models",
    },
    {
      icon: <FaGlobe />,
      title: "Global Innovation",
      description: "Global innovation, local execution",
    },
    {
      icon: <FaShieldAlt />,
      title: "Ethical AI",
      description: "Ethical frameworks for AI and tech",
    },
    {
      icon: <FaHandshake />,
      title: "Partnership",
      description: "True transformation partnership",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4" data-aos>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About ALIF</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Transforming businesses through innovative AI and technology
            solutions
          </p>
        </div>
      </section>
      <section className="py-12 relative overflow-hidden secondary">
        {/* <div className="absolute inset-0 bg-gradient-to-br from- via-gray-400 to-indigo-50 z-0" /> */}

        {/* Decorative Elements */}
        {/* <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" /> */}

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Mission Section */}
            <div className="flex-1 relative" data-aos="fade-right">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#482A7A] rounded-lg flex items-center justify-center transform -rotate-6">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-4xl font-bold bg-clip-text text-[#482A7A]">
                    Our Mission
                  </h3>
                </div>
                <div className="pl-16">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    To deliver comprehensive brand marketing and public
                    relations solutions that are distinctive and effective in
                    assisting our customers in expanding their businesses and
                    meeting their marketing goals
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-48 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

            {/* Vision Section */}
            <div className="flex-1 relative" data-aos="fade-left">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#482A7A] rounded-lg flex items-center justify-center transform rotate-6">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-4xl font-bold text-[#482A7A] bg-clip-text">
                    Our Vision
                  </h3>
                </div>
                <div className="pl-16">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    We envision to deliver results- driven brand marketing
                    campaigns and public relations activities that boost our
                    customers' visibility, income, and development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-12 text-[#482A7A]"
            data-aos="fade-up"
          >
            Who We Are
          </h2>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Points - Left Side */}
            <div className="flex-1">
              <ul className="space-y-4" data-aos="fade-right">
                {whoWeArePoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#B31F7E] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-lg text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image - Right Side */}
            <div className="flex-1">
              <img
                src={aboutImage}
                alt="Who We Are"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#482A7A]">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            We work as your transformation partner—not a vendor—by combining:
          </p>

          {/* First Row - 3 Icons */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
            data-aos="fade-right"
          >
            {coreValuesData.slice(0, 3).map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl text-[#B31F7E] mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#482A7A]">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Second Row - 2 Icons */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8"
            data-aos="fade-left"
          >
            {coreValuesData.slice(3, 5).map((value, index) => (
              <motion.div
                key={index + 3}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
              >
                <div className="text-4xl text-[#B31F7E] mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#482A7A]">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-lg text-gray-700">
            This approach ensures we deliver not just technology solutions, but
            true business transformation that drives lasting value.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
