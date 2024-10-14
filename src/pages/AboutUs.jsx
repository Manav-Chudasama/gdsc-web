import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <Fade>
      <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full lg:justify-start justify-center items-start flex">
              <div className="hidden w-full justify-center items-start gap-6 md:grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                  <img
                    className=" rounded-xl object-cover"
                    src="images/about/a2.png"
                    alt="about Us image"
                  />
                </div>
                <img
                  className="sm:ml-0 ml-auto rounded-xl object-cover"
                  src="images/about/a1.jpeg"
                  alt="about Us image"
                />
              </div>
            </div>
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      About Us
                    </h2>
                    <Slide
                      direction="up"
                      className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center"
                    >
                      Transform how people work together with Google Workspace.
                      See how Google tools and resources help teachers and
                      students create, collaborate, and build digital skills for
                      the future.
                    </Slide>
                  </div>
                </div>
                <div className="w-full flex-col justify-center items-start gap-6 flex">
                  <div className="w-full justify-start items-center gap-8 space-y-5 grid-cols-1">
                    <Slide direction="up">
                      <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                          Why GDSC?
                        </h4>
                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                          GDSCs are Google-endorsed university clubs that
                          educate Google tech and collaborate on projects
                          through workshops and networking. Skills and industry
                          ties improve.
                        </p>
                      </div>
                      <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                          Concept of GDSC
                        </h4>
                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                          Students interested in Google technologies may study,
                          collaborate, and network through Google-backed campus
                          groups for web and app development, DSA, etc.
                        </p>
                      </div>
                      <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                        <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                          Target audience
                        </h4>
                        <p className="text-gray-500 text-base font-normal leading-relaxed">
                          University students interested in DSA, web, and app
                          development who want to improve their abilities,
                          cooperate, and join a Google-focused community.
                        </p>
                      </div>
                    </Slide>
                  </div>
                </div>
              </div>
              <button className="sm:w-fit w-full group px-3.5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6 ">
                  Know More
                </span>
                <svg
                  className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default AboutUs;
