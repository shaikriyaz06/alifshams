import React from "react";
import aiImage from "../../../assets/SMM1.jpg";
import strategyImage from "../../../assets/SMM-2.jpg";

export default function SocialMediaMarketing() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aiImage}
            alt="Social Media Marketing (SMM)"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Social Media Marketing (SMM)
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Curate engaging social content strategies and run targeted ad
            campaigns across platforms
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
                alt="Social Media Marketing"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Content - Right Side */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-[#482A7A]">
                Social Media Marketing (SMM)
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Curate engaging social content strategies and run targeted ad
                campaigns across platforms.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We build strong social media presence through strategic content
                creation and targeted advertising that engages your audience and
                drives brand awareness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
