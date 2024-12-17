import SectionHeading from '@/components/Helper/SectionHeading';
import { aboutInfo } from '@/data/aboutdata';
import React from 'react';
import { FactoryIcon } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>About Me</SectionHeading>

      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* Text Content */}
        <div>
          {aboutInfo.map((info, index) => (
            <div key={index}>
              <h1 className="text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
                {info.title}
              </h1>
              <p className="mt-6 text-base text-gray-500">{info.description}</p>
            </div>
          ))}
          <div className="mt-8">
            {[
              { color: "bg-blue-800", text: "Frontend Development" },
              { color: "bg-orange-800", text: "Backend Development" },
              { color: "bg-green-800", text: "Full Stack Development" },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2 mb-6">
                <div className={`w-7 h-7 ${item.color} flex flex-col items-center justify-center`}>
                  <FactoryIcon className="text-white" />
                </div>
                <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Stats Content */}
        {/* Add any stats or additional content here */}
      </div>
    </div>
  );
};

export default About;
