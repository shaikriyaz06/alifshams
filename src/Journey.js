import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaUsers, FaRocket, FaLightbulb, FaShieldAlt, FaGlobe, FaChartLine, FaCogs } from 'react-icons/fa';
import collabImage from './assets/healthcare.avif';

const Journey = () => {
  const whyUsPoints = [
    "Proven track record with 500+ successful AI implementations",
    "Expert team with deep industry knowledge and technical expertise",
    "End-to-end support from strategy to deployment and beyond",
    "Cutting-edge AI technologies and innovative solutions",
    "Agile methodology ensuring rapid delivery and iteration",
    "Strong focus on ethical AI and compliance frameworks",
    "Global reach with local execution and personalized service",
    "Continuous learning and adaptation to emerging technologies"
  ];

  const collaborationSteps = [
    {
      step: "1. Initial Consultation",
      description: "Schedule a discovery call to understand your needs and objectives"
    },
    {
      step: "2. Whitelist Application",
      description: "Submit your project details for our technical review and approval process"
    },
    {
      step: "3. Startup Onboarding",
      description: "Complete onboarding with dedicated account management and project setup"
    },
    {
      step: "4. Collaboration Begins",
      description: "Start working with our expert team on your transformation journey"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-[#1f1f1f] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Partner with ALIF
          </motion.h1>
          <motion.p 
            className="text-xl text-center max-w-3xl mx-auto text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join forces with us to transform your business through innovative AI and technology solutions
          </motion.p>
        </div>
      </div>

      {/* Collaboration Image Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={collabImage}
              alt="Collaboration"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#482A7A]">Why Choose ALIF?</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyUsPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start p-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-[#B31F7E] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How to Collaborate Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#482A7A]">How to Collaborate with Us</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {collaborationSteps.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <h3 className="text-xl font-bold mb-3 text-[#B31F7E]">{item.step}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-[#B31F7E] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Transformation?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Get whitelisted and onboard with ALIF to begin your AI transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#B31F7E] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Apply for Whitelist
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#B31F7E] transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
