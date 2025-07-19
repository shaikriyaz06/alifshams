import React, { useState } from "react";
import aiImage from "../../../assets/DigitalMarketing.jpg";
import strategyImage from "../../../assets/Demand-Generation.jpeg";
import customImage from "../../../assets/SEO.jpg";
import genaiImage from "../../../assets/SMM-2.jpg";
import agenticImage from "../../../assets/EMAIL1.jpg";
import ethicalImage from "../../../assets/VM1.jpeg";
import researchImage from "../../../assets/IM1.jpg";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function DigitalMarketing() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Demand Generation & Sales Pipelines",
      image: strategyImage,
      link: "/solutions/digital-marketing/demand-generation",
      content:
        "Launch multi-touch digital campaigns, nurture leads through funnels, and optimize conversion.",
    },
    {
      title: "Search Engine Optimization SEO",
      image: customImage,
      link: "/solutions/digital-marketing/seo",
      content:
        "Enhance organic visibility through technical SEO, keyword strategy, and performance insights.",
    },
    {
      title: "Social Media Marketing (SMM)",
      image: genaiImage,
      link: "/solutions/digital-marketing/smm",
      content:
        "Curate engaging social content strategies and run targeted ad campaigns across platforms.",
    },
    {
      title: "Email & Content Marketing",
      image: agenticImage,
      link: "/solutions/digital-marketing/content-marketing",
      content:
        "Develop automated email journeys and SEO-rich, AI-powered blogs, whitepapers, and guides.",
    },
    {
      title: "Video Marketing",
      image: ethicalImage,
      link: "/solutions/digital-marketing/video-marketing",
      content:
        "Create promotional videos, explainers, reels, and corporate stories that elevate brand recall.",
    },
    {
      title: "Influencer Marketing",
      image: researchImage,
      link: "/solutions/digital-marketing/influencer-marketing",
      content:
        "Partner with regional influencers to amplify campaigns using vetted creator networks.",
    },
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aiImage}
            alt="Digital Marketing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Digital Marketing
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            We use data, creativity, and technology to power marketing that
            delivers measurable demand and brand equity.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Data-Driven Marketing Excellence
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We use data, creativity, and technology to power marketing that
            delivers measurable demand and brand equity.
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
                Our Marketing Services
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
                    <Link to={services[activeService].link}>
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
