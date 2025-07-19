import React from "react";
import results from "../../../assets/Results.jpg";
import problem from "../../../assets/problemStatement.jpg";
import initiative from "../../../assets/Initiatives.jpg";

export default function MicrosoftKSA() {
  return (
    <div className="bg-gradient-to-b from-white via-[#f5f3f7] to-[#eae5f5] py-16 mt-[73px]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-extrabold text-center mb-16 text-[#482A7A] tracking-wide">
          Microsoft KSA
        </h1>

        {/* Section: Problem Statement */}
        <div
          className="grid md:grid-cols-2 gap-8 items-center mb-16"
          data-aos="fade-up"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[#B31F7E]">
              Problem Statement
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              As Azure did not have its datacenter in KSA, a campaign was
              initiated to increase the reach and create awareness in KSA
            </p>
          </div>
          <img
            src={problem}
            alt="Problem Illustration"
            className="rounded-2xl shadow-md object-cover w-full h-80"
          />
        </div>

        {/* Section: Alif's Initiatives */}
        <div
          className="grid md:grid-cols-2 gap-8 items-center mb-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src={initiative}
            alt="Initiatives"
            className="rounded-2xl shadow-md object-cover w-full h-80"
          />
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[#B31F7E]">
              Alif's Initiatives
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-lg text-gray-700">
              <li>
                Microsoft KSA aligned Alif with Gold Partners in the region.{" "}
              </li>
              <li>
                Lead generation campaign through cold calling were rigorously
                conducted for the same.
              </li>
            </ul>
          </div>
        </div>

        {/* Section: Results */}
        <div
          className="grid md:grid-cols-2 gap-8 items-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[#B31F7E]">Results</h2>
            <ul className="list-disc pl-5 space-y-3 text-lg text-gray-700">
              <li>
                The campaign was successfully conducted with a high number of
                qualified leads for Azure.
              </li>
            </ul>
          </div>
          <img
            src={results}
            alt="Results"
            className="rounded-2xl shadow-md object-cover w-full h-80"
          />
        </div>
      </div>
    </div>
  );
}
