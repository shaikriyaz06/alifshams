import React from "react";
import aiImage from "../../../assets/EMAIL1.jpg";
import strategyImage from "../../../assets/EMAIL.jpg";

export default function EmailContentMarketing() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aiImage}
            alt="Email & Content Marketing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-90"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Email & Content Marketing
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Develop automated email journeys and SEO-rich, AI-powered blogs, whitepapers, and guides
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
                alt="Email & Content Marketing"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Content - Right Side */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-[#482A7A]">
                Email & Content Marketing
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Develop automated email journeys and SEO-rich, AI-powered blogs, whitepapers, and guides.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our integrated approach combines compelling content creation with strategic email marketing to nurture leads and drive customer engagement throughout their journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}