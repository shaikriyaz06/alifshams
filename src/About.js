import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaRocket, FaGlobe, FaShieldAlt, FaHandshake } from 'react-icons/fa';
import heroImage from './assets/industries1.png';
import aboutImage from './assets/software.avif';

const About = () => {
  const whoWeArePoints = [
    "Leading technology solutions provider",
    "Dedicated to transforming businesses through innovation",
    "Trusted partner for organizations worldwide",
    "Expertise in AI consulting and business transformation",
    "Helping companies embrace the future of technology",
    "Committed to sustainable growth across industries"
  ];

  const coreValuesData = [
    { icon: <FaBullseye />, title: "Business Outcome-First", description: "Business outcome-first thinking" },
    { icon: <FaRocket />, title: "Agile Delivery", description: "Agile delivery models" },
    { icon: <FaGlobe />, title: "Global Innovation", description: "Global innovation, local execution" },
    { icon: <FaShieldAlt />, title: "Ethical AI", description: "Ethical frameworks for AI and tech" },
    { icon: <FaHandshake />, title: "Partnership", description: "True transformation partnership" }
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
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About ALIF
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Transforming businesses through innovative AI and technology solutions
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#482A7A]">
            Who We Are
          </h2>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Points - Left Side */}
            <div className="flex-1">
              <ul className="space-y-4">
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
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#482A7A]">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            We work as your transformation partner—not a vendor—by combining:
          </p>
          
          {/* First Row - 3 Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
                <h3 className="text-xl font-bold mb-2 text-[#482A7A]">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Second Row - 2 Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
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
                <h3 className="text-xl font-bold mb-2 text-[#482A7A]">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-lg text-gray-700">
            This approach ensures we deliver not just technology solutions, but true business transformation that drives lasting value.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
