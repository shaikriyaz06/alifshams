import React from "react";
import aiImage from "../../../assets/cloudSolutions2.webp";
import strategyImage from "../../../assets/cloudSolutions1.webp";

export default function CloudSolutions() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aiImage}
            alt="Cloud Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative top-10 z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Cloud Solutions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Migrate, modernize, and manage workloads across AWS, GCP, and Azure
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
                alt="Cloud Solutions"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Content - Right Side */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-[#482A7A]">
                Cloud Solutions
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Migrate, modernize, and manage workloads across AWS, GCP, and Azure using cost-effective, secure architectures.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our cloud expertise enables seamless migration and optimization of your infrastructure for enhanced scalability, security, and cost efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}