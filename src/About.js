import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaLightbulb, FaHandshake, FaRocket } from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaUsers className="text-4xl text-[#B31F7E]" />,
      title: 'People First',
      description: 'We believe in nurturing talent and fostering a culture of growth and innovation.',
    },
    {
      icon: <FaLightbulb className="text-4xl text-[#B31F7E]" />,
      title: 'Innovation',
      description: 'Constantly pushing boundaries to deliver cutting-edge solutions.',
    },
    {
      icon: <FaHandshake className="text-4xl text-[#B31F7E]" />,
      title: 'Partnership',
      description: 'Building lasting relationships with our clients through trust and collaboration.',
    },
    {
      icon: <FaRocket className="text-4xl text-[#B31F7E]" />,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality in everything we do.',
    },
  ];

  const stats = [
    { number: '10+', label: 'Years of Experience' },
    { number: '200+', label: 'Projects Completed' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '95%', label: 'Client Satisfaction' },
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
            About ALIF
          </motion.h1>
          <motion.p 
            className="text-xl text-center max-w-3xl mx-auto text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We are a leading technology solutions provider, dedicated to transforming businesses through innovative digital solutions.
          </motion.p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#482A7A]">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2013, ALIF began with a vision to bridge the gap between technology and business success. What started as a small team of passionate innovators has grown into a global technology solutions provider.
            </p>
            <p className="text-gray-600">
              Today, we continue to push the boundaries of what's possible, helping businesses across various industries embrace digital transformation and achieve their full potential.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#482A7A]">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-[#B31F7E] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#482A7A]">Our Leadership</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Our diverse team of experts brings together years of industry experience and technical expertise to deliver exceptional results for our clients.
          </p>
          <button className="bg-[#B31F7E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#482A7A] transition-colors">
            Meet Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default About; 