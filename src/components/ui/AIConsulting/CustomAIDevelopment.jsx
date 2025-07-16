import React from "react";
import aiImage from "../../../assets/customAIDevelopmentMain1.avif";
import strategyImage from "../../../assets/customAIDevelopment.avif";

export default function CustomAIDevelopment() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aiImage}
            alt="Custom AI Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Custom AI Development
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Build tailored AI solutions from scratch using cutting-edge technologies
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
                alt="Custom AI Development"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Content - Right Side */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-[#482A7A]">
                Custom AI Development
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Build tailored AI solutions from scratch using cutting-edge technologies. Our expert team develops machine learning models, neural networks, and AI applications specifically designed for your unique business requirements.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From concept to deployment, we create custom AI solutions that perfectly align with your business processes and deliver exceptional performance and scalability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}