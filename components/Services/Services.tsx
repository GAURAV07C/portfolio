'use client';
import SectionHeading from '@/components/Helper/SectionHeading';
// import { servicesData } from '@/Data/data';
import { servicesData } from '@/data/services';
import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>Services</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20">
        {servicesData.map((service) => (
          <div key={service.id}>
            {/* Render ServiceCard */}
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
