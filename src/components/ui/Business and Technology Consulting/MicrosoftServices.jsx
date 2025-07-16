import React from "react";
import aiImage from "../../../assets/MS.png";
import strategyImage from "../../../assets/MS2.jpeg";

export default function MicrosoftServices() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aiImage}
            alt="Microsoft-related Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative top-36 z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Microsoft-related Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Implement Azure Cloud, Microsoft 365, Power Platform, and Copilot AI services
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
                alt="Microsoft Services"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Content - Right Side */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-[#482A7A]">
                Microsoft-related Services
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Implement Azure Cloud, Microsoft 365, Power Platform, and Copilot AI services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our Microsoft expertise helps organizations leverage the full potential of Microsoft's ecosystem to drive productivity, collaboration, and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}