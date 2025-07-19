import React from "react";
import results from "../../../assets/Results.jpg";
import problem from "../../../assets/problemStatement.jpg";
import initiative from "../../../assets/Initiatives.jpg";

export default function Qatar() {
  return (
    <div className="bg-gradient-to-b from-white via-[#f5f3f7] to-[#eae5f5] py-16 mt-[73px]">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-5xl font-extrabold text-center mb-16 text-[#482A7A] tracking-wide">
          Mannai- ǫatar
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
              Mannai Group approached Alif to carry out activities like M365
              Migration and Microsoft Training Workshops. The activities were
              free to the Customer and the amount was claimed from their
              Microsoft Co-Op funding.
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
              <li>Email blasting with EDM (Agenda for training)</li>
              <li>Align appointment and deliver the workshops</li>
              <li>Send training content after workshop</li>
              <li>
                Get on requirement gathering call with the customer for
                Migration
              </li>
              <li>Prepare and submit SOW and Project Plan</li>
              <li>Complete the migration</li>
              <li>Send sign-off to the customer</li>
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
              <li>Conducted 10 Workshops with 5 attendees on each</li>
              <li>Delivered 25 Pre- Sales and Demo on M365</li>
              <li>M365 migration and upgrade done for 12 Companies</li>
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
