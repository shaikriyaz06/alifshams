import React from "react";
import aiImage from "../../../assets/Demand-Generation.jpeg";
import strategyImage from "../../../assets/Demand-Generation1.jpeg";

export default function DemandGeneration() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aiImage}
            alt="Demand Generation & Sales Pipelines"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative top-32 z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Demand Generation & Sales Pipelines
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Launch multi-touch digital campaigns, nurture leads through funnels, and optimize conversion
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
                alt="Demand Generation & Sales Pipelines"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Content - Right Side */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-[#482A7A]">
                Demand Generation & Sales Pipelines
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Launch multi-touch digital campaigns, nurture leads through funnels, and optimize conversion.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our demand generation strategies create qualified leads and build robust sales pipelines that drive consistent revenue growth for your business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}