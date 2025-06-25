import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCode, FaChartLine, FaUserTie, FaPalette } from 'react-icons/fa';

const Journey = () => {
  const opportunities = [
    {
      icon: <FaCode className="text-4xl text-[#B31F7E]" />,
      title: 'Software Development',
      positions: ['Full Stack Developer', 'Mobile App Developer', 'DevOps Engineer'],
    },
    {
      icon: <FaChartLine className="text-4xl text-[#B31F7E]" />,
      title: 'Data & Analytics',
      positions: ['Data Scientist', 'Business Analyst', 'ML Engineer'],
    },
    {
      icon: <FaUserTie className="text-4xl text-[#B31F7E]" />,
      title: 'Business & Strategy',
      positions: ['Project Manager', 'Business Consultant', 'Product Owner'],
    },
    {
      icon: <FaPalette className="text-4xl text-[#B31F7E]" />,
      title: 'Design & UX',
      positions: ['UI/UX Designer', 'Product Designer', 'Visual Designer'],
    },
  ];

  const benefits = [
    'Competitive Salary & Benefits',
    'Remote Work Options',
    'Professional Development',
    'Health & Wellness Programs',
    'Team Building Events',
    'Career Growth Opportunities',
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
            Be a Part of Our Journey
          </motion.h1>
          <motion.p 
            className="text-xl text-center max-w-3xl mx-auto text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join our team of innovators and help shape the future of technology
          </motion.p>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#482A7A]">Why Join ALIF?</h2>
            <p className="text-gray-600 mb-8">
              At ALIF, we believe in nurturing talent and providing opportunities for growth. Our culture promotes innovation, collaboration, and continuous learning.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Career Opportunities Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#482A7A]">Career Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{opportunity.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-center">{opportunity.title}</h3>
                <ul className="space-y-2">
                  {opportunity.positions.map((position, idx) => (
                    <li key={idx} className="text-gray-600 text-center">{position}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-[#B31F7E] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="text-lg font-semibold text-center">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Application CTA */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#482A7A]">Ready to Join Us?</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            We're always looking for talented individuals to join our team. Check out our current openings or send us your resume.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#B31F7E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#482A7A] transition-colors">
              View Open Positions
            </button>
            <button className="border-2 border-[#B31F7E] text-[#B31F7E] px-8 py-3 rounded-lg font-semibold hover:bg-[#B31F7E] hover:text-white transition-colors">
              Submit Your Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey; 