import React from "react";
import aiImage from "../../../assets/AI-training.png";
import strategyImage from "../../../assets/AI-research2.webp";

export default function AIResearchTraining() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aiImage}
            alt="AI Research & Training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            AI Research & Training
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Stay ahead with cutting-edge AI research and comprehensive team training programs
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image - Left Side */}
            <div className="flex-1">
              <img
                src={strategyImage}
                alt="AI Research & Training"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Content - Right Side */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-[#482A7A]">
                AI Research & Training
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Stay ahead with cutting-edge AI research and comprehensive team training programs. We provide workshops, certification courses, and ongoing support to build internal AI capabilities within your organization.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our training programs empower your team with the latest AI knowledge and skills, ensuring your organization remains at the forefront of AI innovation and implementation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}