import React from "react";
import aiImage from "../../../assets/AI-Ethics2.jpeg";
import strategyImage from "../../../assets/AI-Ethics1.jpeg";

export default function EthicalAI() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aiImage}
            alt="Ethical AI and Compliance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Ethical AI and Compliance
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Ensure responsible AI deployment with comprehensive ethics frameworks
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
                alt="Ethical AI and Compliance"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Content - Right Side */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-[#482A7A]">
                Ethical AI and Compliance
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ensure responsible AI deployment with comprehensive ethics frameworks and compliance strategies. We implement bias detection, fairness metrics, transparency measures, and regulatory compliance protocols.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our ethical AI approach builds trust and ensures your AI systems operate fairly, transparently, and in compliance with industry regulations and standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}