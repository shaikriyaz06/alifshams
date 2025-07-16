import React from "react";
import aiImage from "../../../assets/GRC1.png";
import strategyImage from "../../../assets/compliance.jpeg";

export default function GovernanceRiskCompliance() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aiImage}
            alt="Governance, Risk & Compliance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Governance, Risk & Compliance
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Develop enterprise governance strategies across IT, data, and AI
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
                alt="Governance, Risk & Compliance"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Content - Right Side */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-[#482A7A]">
                Governance, Risk & Compliance
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Develop enterprise governance strategies across IT, data, and AI to ensure ongoing resilience and audit-readiness.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our GRC framework helps organizations maintain regulatory compliance while managing risks and establishing robust governance structures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}