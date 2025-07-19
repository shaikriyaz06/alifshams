import React from "react";
import results from "../../../assets/Results.jpg";
import problem from "../../../assets/problemStatement.jpg";
import initiative from "../../../assets/Initiatives.jpg";

export default function Microsoft() {
  return (
    <div className="bg-gradient-to-b from-white via-[#f5f3f7] to-[#eae5f5] py-16 mt-[73px]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-extrabold text-center mb-16 text-[#482A7A] tracking-wide">
          Microsoft UAE - D365 Campaign
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
              Partner has customized solution on D365, Alif was engaged to
              create awareness of their ERP & CRM solution through lead
              generation and webinar activities.
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
                Cold Calling customers and generating interest in the ERP and
                CRM
              </li>
              <li>Presenting DEMO on 2nd Call</li>
              <li>Pass on the Lead details and Progress to Partner</li>
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
                Conducted 3 webinars in 3 months with 50+ attendees in each
                webinar
              </li>
              <li>
                Appointment generation of 30+ customers to whom a demo was
                presented
              </li>
              <li>
                10+ Customers were interested for further discussion which were
                handed over to the partner
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
