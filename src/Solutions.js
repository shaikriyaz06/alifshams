import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaRobot, FaShieldAlt, FaMobile, FaDatabase, FaChartLine } from 'react-icons/fa';

const Solutions = () => {
  const solutions = [
    {
      icon: <FaCloud className="text-5xl text-[#B31F7E]" />,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure solutions tailored to your business needs. We help you migrate, manage, and optimize your cloud presence.',
      features: ['Cloud Migration', 'Hybrid Cloud', 'Cloud Security', 'DevOps'],
    },
    {
      icon: <FaRobot className="text-5xl text-[#B31F7E]" />,
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence and machine learning to drive innovation and efficiency in your business processes.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Deep Learning'],
    },
    {
      icon: <FaShieldAlt className="text-5xl text-[#B31F7E]" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and maintain business continuity in an evolving threat landscape.',
      features: ['Threat Detection', 'Security Audits', 'Compliance', 'Incident Response'],
    },
    {
      icon: <FaMobile className="text-5xl text-[#B31F7E]" />,
      title: 'Mobile Solutions',
      description: 'Create engaging mobile experiences with our custom app development and mobile-first solutions.',
      features: ['iOS Development', 'Android Development', 'Cross-platform Apps', 'Mobile Strategy'],
    },
    {
      icon: <FaDatabase className="text-5xl text-[#B31F7E]" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics and business intelligence solutions.',
      features: ['Big Data', 'Data Visualization', 'Business Intelligence', 'Data Warehousing'],
    },
    {
      icon: <FaChartLine className="text-5xl text-[#B31F7E]" />,
      title: 'Digital Transformation',
      description: 'Navigate your digital transformation journey with our comprehensive strategy and implementation services.',
      features: ['Process Automation', 'Legacy Modernization', 'Digital Strategy', 'Change Management'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white pt-20">
      {/* Hero Section */}
      <div className="bg-[#1f1f1f] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-300">
            Discover our comprehensive range of technology solutions designed to drive your business forward in the digital age.
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <motion.div
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center text-center">
                {solution.icon}
                <h3 className="text-2xl font-bold mt-4 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <div className="w-full">
                  <h4 className="font-semibold mb-3 text-[#B31F7E]">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <div className="bg-[#B31F7E] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can help you achieve your business goals.
          </p>
          <button className="bg-white text-[#B31F7E] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Solutions; 