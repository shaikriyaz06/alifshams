import React from "react";
import aiImage from "../../../assets/Digital-Transformation.jpg.webp";
import strategyImage from "../../../assets/Digital-Transformation1.webp";

export default function DigitalTransformation() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aiImage}
            alt="Strategy & Digital Transformation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Strategy & Digital Transformation
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Shape business models and redefine service delivery using digital tools
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
                alt="Strategy & Digital Transformation"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Content - Right Side */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-[#482A7A]">
                Strategy & Digital Transformation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Shape business models, redefine service delivery using digital tools, and guide leadership through change journeys.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We help organizations navigate digital transformation by developing strategic roadmaps that align technology initiatives with business objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}