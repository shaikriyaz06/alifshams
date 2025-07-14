import React from "react";
import aiImage from "../../../assets/software.avif";
import strategyImage from "../../../assets/AI-Consulting.webp";

export default function AIStrategy() {
  return (
    <div className="bg-white">
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            AI Strategy - Development & Implementation
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Transform your business with cutting-edge AI solutions and strategic
            implementation
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
                alt="AI Strategy Development"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Content - Right Side */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-[#482A7A]">
                AI Strategy - Development & Implementation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Develop comprehensive AI roadmaps aligned with business
                objectives. We assess your current capabilities, identify
                opportunities, and create strategic implementation plans that
                drive measurable ROI and competitive advantage.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our strategic approach ensures seamless integration of AI
                technologies into your existing infrastructure while maximizing
                business value and minimizing implementation risks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
