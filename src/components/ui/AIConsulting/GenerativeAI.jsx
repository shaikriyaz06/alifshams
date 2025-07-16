import React from "react";
import aiImage from "../../../assets/GEN AI.jpg";
import strategyImage from "../../../assets/GEN AI2.jpg";

export default function GenerativeAI() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aiImage}
            alt="Generative AI Development & Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Generative AI Development & Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Harness the power of generative AI with custom LLMs and content generation systems
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
                alt="Generative AI Development"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Content - Right Side */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-[#482A7A]">
                Generative AI Development & Services
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Harness the power of generative AI with custom LLMs, chatbots, and content generation systems. We implement GPT-based solutions, fine-tune models, and create AI-powered creative tools for your organization.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our generative AI solutions enable automated content creation, intelligent conversations, and creative problem-solving capabilities that transform how your business operates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}