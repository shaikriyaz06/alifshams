import React, { useState } from "react";
import aiImage from "../../../assets/AIConsulting.jpeg";
import strategyImage from "../../../assets/AI-Consulting.webp";
import customImage from "../../../assets/customAIDevelopment.avif";
import genaiImage from "../../../assets/GEN AI.jpg";
import agenticImage from "../../../assets/AgenticAI1.avif";
import ethicalImage from "../../../assets/AI-Ethics1.jpeg";
import researchImage from "../../../assets/AI-research3.webp";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function AIConsulting() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "AI Strategy - Development & Implementation",
      image: strategyImage,
      link: "/solutions/AIConsulting/AIstrategy",
      content:
        "Develop comprehensive AI roadmaps aligned with business objectives. We assess your current capabilities, identify opportunities, and create strategic implementation plans that drive measurable ROI and competitive advantage.",
    },
    {
      title: "Custom AI Development",
      image: customImage,
      link: "/solutions/AIConsulting/customAI-development",
      content:
        "Build tailored AI solutions from scratch using cutting-edge technologies. Our expert team develops machine learning models, neural networks, and AI applications specifically designed for your unique business requirements.",
    },
    {
      title: "Generative AI Development & Services",
      image: genaiImage,
      link: "/solutions/AIConsulting/genAI-development",
      content:
        "Harness the power of generative AI with custom LLMs, chatbots, and content generation systems. We implement GPT-based solutions, fine-tune models, and create AI-powered creative tools for your organization.",
    },
    {
      title: "Agentic AI",
      image: agenticImage,
      link: "/solutions/AIConsulting/agenticAI",
      content:
        "Deploy autonomous AI agents that can perform complex tasks independently. Our agentic AI solutions include intelligent automation, decision-making systems, and self-learning agents that adapt to changing environments.",
    },
    {
      title: "Ethical AI and Compliance",
      image: ethicalImage,
      link: "/solutions/AIConsulting/ethicalAI-compliance",
      content:
        "Ensure responsible AI deployment with comprehensive ethics frameworks and compliance strategies. We implement bias detection, fairness metrics, transparency measures, and regulatory compliance protocols.",
    },
    {
      title: "AI Research & Training",
      image: researchImage,
      link: "/solutions/AIConsulting/AI-research",
      content:
        "Stay ahead with cutting-edge AI research and comprehensive team training programs. We provide workshops, certification courses, and ongoing support to build internal AI capabilities within your organization.",
    },
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aiImage}
            alt="AI Consulting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">AI Consulting</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Transform your business with cutting-edge AI solutions and strategic
            implementation
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Empowering Business Through AI
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We enable organizations to leverage Artificial Intelligence not just
            as a technology but as a strategic enabler. Our approach blends AI
            engineering, ethics, and business alignment to deliver
            transformative solutions that drive measurable results and
            sustainable growth across industries.
          </p>
        </div>
      </section>

      {/* Services & Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Services - Left Side */}
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-8 text-[#B31F7E]">
                Our AI Services
              </h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      activeService === index
                        ? "bg-[#B31F7E] text-white shadow-lg"
                        : "bg-white text-gray-800 hover:shadow-md"
                    }`}
                  >
                    <span className="font-medium">{service.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical Line */}
            <div className="hidden lg:block w-px h-96 bg-gray-300"></div>

            {/* Content - Right Side */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-4 text-[#482A7A]">
                    {services[activeService].title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {services[activeService].content}
                  </p>
                  <div className="mt-5">
                    <Link  to={services[activeService].link}>
                      <Button className="!bg-[#B31F7E] !text-white">
                        Know More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
