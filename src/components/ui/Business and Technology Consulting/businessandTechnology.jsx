import React, { useState } from "react";
import aiImage from "../../../assets/Business.jpg";
import strategyImage from "../../../assets/MS.png";
import customImage from "../../../assets/webdesign.jpg";
import genaiImage from "../../../assets/cloudSolutions1.webp";
import agenticImage from "../../../assets/cybersecurity.webp";
import ethicalImage from "../../../assets/Digital-Transformation.jpg.webp";
import researchImage from "../../../assets/compliance.jpeg";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function BusinessTechnology() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Microsoft-related Services",
      image: strategyImage,
      link: "/solutions/business-technology/microsoft",
      content:
        "Implement Azure Cloud, Microsoft 365, Power Platform, and Copilot AI services.",
    },
    {
      title: "Website Design & Development",
      image: customImage,
      link: "/solutions/business-technology/website-design",
      content:
        "Craft UX-rich, high-performance websites integrated with analytics and automation.",
    },
    {
      title: "Cloud Solutions",
      image: genaiImage,
      link: "/solutions/business-technology/cloud-solutions",
      content:
        "Migrate, modernize, and manage workloads across AWS, GCP, and Azure using cost-effective, secure architectures.",
    },
    {
      title: "Cybersecurity",
      image: agenticImage,
      link: "/solutions/business-technology/cybersecurity",
      content:
        "Conduct risk assessments, build secure access control, implement threat detection, and manage compliance audits.",
    },
    {
      title: "Strategy & Digital Transformation",
      image: ethicalImage,
      link: "/solutions/business-technology/strategy-digitalTransformation",
      content:
        "Shape business models, redefine service delivery using digital tools, and guide leadership through change journeys.",
    },
    {
      title: "Governance, Risk & Compliance",
      image: researchImage,
      link: "/solutions/business-technology/risk-compliance",
      content:
        "Develop enterprise governance strategies across IT, data, and AI to ensure ongoing resilience and audit-readiness.",
    },
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aiImage}
            alt="Business and Technology Consulting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Business & Technology Consulting
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            We help enterprises optimize their digital backbone, making them
            agile, compliant, and customer-centric.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Digital Transformation Excellence
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We help enterprises optimize their digital backbone, making them
            agile, compliant, and customer-centric.
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
                Our Services
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
