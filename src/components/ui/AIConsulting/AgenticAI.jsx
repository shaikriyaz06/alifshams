import React from "react";
import aiImage from "../../../assets/AgenticAI.jpg";
import strategyImage from "../../../assets/AgenticAI1.avif";

export default function AgenticAI() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aiImage}
            alt="Agentic AI"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Agentic AI
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Deploy autonomous AI agents that can perform complex tasks independently
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
                alt="Agentic AI"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Content - Right Side */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-[#482A7A]">
                Agentic AI
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Deploy autonomous AI agents that can perform complex tasks independently. Our agentic AI solutions include intelligent automation, decision-making systems, and self-learning agents that adapt to changing environments.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                These intelligent agents work autonomously to optimize processes, make informed decisions, and continuously improve their performance without human intervention.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}