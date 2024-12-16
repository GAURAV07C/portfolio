'use client';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

type Props = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
};

const ServiceCard = ({ service }: Props) => {
  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Transform values to achieve the 3D tilt effect
  const rotateX = useTransform(y, [-100, 100], [15, -15]); // Rotate on Y-axis
  const rotateY = useTransform(x, [-100, 100], [-15, 15]); // Rotate on X-axis

  return (
    <motion.div
      className="shadow-2xl p-6 rounded-lg bg-[#814ced] text-white cursor-pointer"
      style={{
        rotateX, // Apply the tilt on X-axis
        rotateY, // Apply the tilt on Y-axis
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        x.set(offsetX); // Update motion value for X
        y.set(offsetY); // Update motion value for Y
      }}
      onMouseLeave={() => {
        x.set(0); // Reset X-axis tilt
        y.set(0); // Reset Y-axis tilt
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 10,
      }}
    >
      <Image src={service.icon} alt={service.title} width={50} height={50} />
      <h1 className="mt-4 text-lg font-bold text-gray-100">{service.title}</h1>
      <p className="mt-3 text-sm text-white text-opacity-80">
        {service.description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
