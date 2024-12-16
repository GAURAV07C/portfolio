import SectionHeading from '@/components/Helper/SectionHeading'
// import { aboutInfo } from '@/data/aboutdata'
// import { aboutInfo } from '@/Data/data'
import { aboutInfo } from '@/data/aboutdata'
import Image from 'next/image'
import React from 'react'
// import { FaCheck } from 'react-icons/fa'
import { FactoryIcon } from 'lucide-react'


const About = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
        <SectionHeading  >About me</SectionHeading>

        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20 '>
          {/* Text Content */}
          <div>
            <h1 className='text-bg text-26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200'>{aboutInfo.title}</h1>
            <p className='mt-6 text-base text-gray-500'>{aboutInfo.description}</p>
            <div className='mt-8'>
              <div className='flex items-center space-x-2 mb-6'>
                <div className='w-7 h-7 bg-blue-800 flex flex-col items-center justify-center'>
                  {/* <FaCheck className='text-white' /> */}
                </div>
                <p className='text-sm sm:text-basse md:text-lg font-bold text-gray-300'>Front   Development</p>

              </div>
              <div className='flex items-center space-x-2 mb-6'>
                <div className='w-7 h-7 bg-orange-800 flex flex-col items-center justify-center'>
                  <FactoryIcon className='text-white' />
                </div>
                <p className='text-sm sm:text-basse md:text-lg font-bold text-gray-300'>Backend   Development</p>

              </div>
              <div className='flex items-center space-x-2 mb-6'>
                <div className='w-7 h-7 bg-green-800 flex flex-col items-center justify-center'>
                  <FactoryIcon className='text-white' />
                </div>
                <p className='text-sm sm:text-basse md:text-lg font-bold text-gray-300'>Full Stack   Development</p>

              </div>
            </div>
          </div>
          {/* stats Content */}
           
        </div>

    </div>
  )
}

export default About
