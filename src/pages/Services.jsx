import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import {
  FaBrain,
  FaBroadcastTower,
  FaBullhorn,
  FaCloud,
  FaDumbbell,
  FaLaptopCode,
  FaMobileAlt,
  FaNewspaper,
  FaPaintBrush,
  FaProjectDiagram,
  FaRunning,
  FaTruck,
} from "react-icons/fa";

const Services = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="903f4a9e-7ac3-441c-9613-04c15fcc0a14"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)"
                width="52"
                height="24"
              />
            </svg>
          </span>
          <Slide>What We Do</Slide>
        </h2>
        <Slide direction="up">
          <p className="text-base text-justify text-gray-700 md:text-lg">
            Welcome to GDSC-DJSCE , where one gets immense knowledge from the
            campaigns, workshops, and other events. Shaping {"tomorrow's"}{" "}
            world, TODAY!
          </p>
        </Slide>
      </div>
      <div className="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-7">
        <Zoom cascade damping={0.13}>
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <FaMobileAlt className="w-12 h-12 text-indigo-500 sm:w-16 sm:h-16" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">App Development</h6>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <FaLaptopCode className="w-12 h-12 text-indigo-500 sm:w-16 sm:h-16" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Web Development</h6>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <FaBrain className="w-12 h-12 text-indigo-500 sm:w-16 sm:h-16" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">machine learning</h6>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <FaBullhorn className="w-12 h-12 text-indigo-500 sm:w-16 sm:h-16" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Marketing</h6>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <FaPaintBrush className="w-12 h-12 text-indigo-500 sm:w-16 sm:h-16" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Creatives</h6>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <FaTruck className="w-12 h-12 text-indigo-500 sm:w-16 sm:h-16" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Logistics</h6>
          </div>

          <div className="text-center col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
              <FaBroadcastTower className="w-12 h-12 text-indigo-500 sm:w-16 sm:h-16" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Publicity</h6>
          </div>
        </Zoom>
      </div>
      {/* <div className="text-center">
        <a
          href="/"
          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md text-white bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
        >
          Learn more
          <span className="ml-1 -mr-2">
            <svg className="w-8 h-8" stroke="currentColor" viewBox="0 0 52 52">
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </span>
        </a>
      </div> */}
    </div>
  );
};

export default Services;
