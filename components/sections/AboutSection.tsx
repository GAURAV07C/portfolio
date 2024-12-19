import SectionHeading from '@/components/Helper/SectionHeading';
import { aboutInfo } from '@/data/aboutdata';
import React from 'react';
import { FactoryIcon } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="pt-16 pb-16 bg-gradient-to-r from-purple-900 via-gray-900 to-black">
      <SectionHeading>About Me</SectionHeading>

      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
        {/* Text Content */}
        <div>
          {aboutInfo.map((info, index) => (
            <div key={index} className="mb-12">
              <h1 className="text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white transition duration-300 ease-in-out transform hover:scale-105">
                {info.title}
              </h1>
              <p className="mt-6 text-base text-gray-300">{info.description}</p>
            </div>
          ))}
          <div className="mt-8">
            {[
              { color: "bg-gradient-to-r from-blue-500 to-blue-800", text: "Frontend Development" },
              { color: "bg-gradient-to-r from-orange-500 to-orange-800", text: "Backend Development" },
              { color: "bg-gradient-to-r from-green-500 to-green-800", text: "Full Stack Development" },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4 mb-6">
                <div className={`w-10 h-10 ${item.color} flex flex-col items-center justify-center rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-110`}>
                  <FactoryIcon className="text-white" />
                </div>
                <p className="text-sm sm:text-base md:text-lg font-bold text-white">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Stats Content */}
        {/* Add any stats or additional content here */}
      </div>
    </div>
  )
}

export default AboutSection
