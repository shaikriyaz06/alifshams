import React from 'react';
import results from '../../../assets/Results.jpg'
import problem from '../../../assets/problemStatement.jpg'
import initiative from '../../../assets/Initiatives.jpg'

export default function RedingtonGulf() {
  return (
    <div className="bg-gradient-to-b from-white via-[#f5f3f7] to-[#eae5f5] py-16 mt-[73px]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-extrabold text-center mb-16 text-[#482A7A] tracking-wide">Redington Gulf Case Study</h1>

        {/* Section: Problem Statement */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16" data-aos="fade-up">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[#B31F7E]">Problem Statement</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Cloud4C approached Redington for an exclusive activity for Enterprise Customers in KSA and UAE brand awareness and to increase their reach in Enterprise customers with AWS advanced workload.
            </p>
          </div>
          <img
            src={problem}
            alt="Problem Illustration"
            className="rounded-2xl shadow-md object-cover w-full h-80"
          />
        </div>

        {/* Section: Alif's Initiatives */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16" data-aos="fade-up" data-aos-delay="200">
          <img
            src={initiative}
            alt="Initiatives"
            className="rounded-2xl shadow-md object-cover w-full h-80"
          />
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[#B31F7E]">Alif's Initiatives</h2>
            <ul className="list-disc pl-5 space-y-3 text-lg text-gray-700">
              <li>Cold Calling Enterprise customers and generating interest in AWS</li>
              <li>Pass on the Lead details and Progress to Partner/AWS</li>
            </ul>
          </div>
        </div>

        {/* Section: Results */}
        <div className="grid md:grid-cols-2 gap-8 items-center" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[#B31F7E]">Results</h2>
            <ul className="list-disc pl-5 space-y-3 text-lg text-gray-700">
              <li>Active Campaign</li>
              <li>25 Prospects of 500+ Users in UAE</li>
              <li>20 Prospects of 500+ users in KSA</li>
              <li>Target to get 50+ Leads in both regions</li>
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
