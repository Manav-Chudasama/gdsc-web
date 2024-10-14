import React from "react";

const Vision = () => {
  return (
    <div>
      <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">
            Vision
          </h2>
          <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 hover:bg-gray-50 rounded-2xl">
              <div className="flex items-center">
                <img
                  src="/images/vision/v1.jpg"
                  alt="blogs tailwind section"
                  className="rounded-t-2xl w-full h-64 object-cover"
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl">
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                  GDSC Study Jams
                </h4>
                <p className="text-gray-500 leading-6 mb-10">
                  Participating in GDSC study jams unlocks the opportunity to
                  access premium courses at no cost, allowing individuals to
                  acquire valuable skills and knowledge without the financial
                  barrier.
                </p>
              </div>
            </div>
            <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 hover:bg-gray-50 rounded-2xl">
              <div className="flex items-center">
                <img
                  src="/images/vision/v2.jpg"
                  alt="blogs tailwind section"
                  className="rounded-t-2xl w-full h-64 object-cover"
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl">
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                  Technical Events
                </h4>
                <p className="text-gray-500 leading-6 mb-10">
                  Discover a world of innovation at our hackathons and a
                  spectrum of tech events. Join us to elevate your skills and
                  connect with a vibrant community of tech enthusiasts.
                </p>
              </div>
            </div>

            <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 hover:bg-gray-50 rounded-2xl">
              <div className="flex items-center">
                <img
                  src="/images/vision/v3.jpg"
                  alt="blogs tailwind section"
                  className="rounded-t-2xl w-full h-64 object-cover"
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl">
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                  Overall Development
                </h4>
                <p className="text-gray-500 leading-6 mb-10">
                  Ignite holistic growth with us! Our programs fuse tech skills,
                  personal development, and community engagement, creating a
                  supportive environment for your advancement.
                </p>
              </div>
            </div>

            <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 hover:bg-gray-50 rounded-2xl">
              <div className="flex items-center">
                <img
                  src="/images/vision/v4.jpg"
                  alt="blogs tailwind section"
                  className="rounded-t-2xl w-full h-64 object-cover"
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl">
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                  Workshops
                </h4>
                <p className="text-gray-500 leading-6 mb-10">
                  Dive into practical learning with expert-led workshops! Gain
                  valuable skills and real-world insights in a dynamic
                  environment. Join us for a transformative experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
