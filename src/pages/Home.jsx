import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <Fade duration={2000}>
      <div className="h-[50vh] md:h-[90vh] w-full flex justify-center md:justify-normal mt-20">
        <div className="h-full w-[85%] md:w-[50%] md:pl-[2vw] flex flex-col justify-center">
          <div>
            <span className="text-center md:text-start block text-2xl md:text-3xl lg:text-4xl">
              <ReactTyped
                strings={[
                  "Welcome to",
                  "आपका स्वागत है",
                  "स्वागत आहे",
                  "میں خوش آمدید",
                ]}
                typeSpeed={100}
                backSpeed={100}
                backDelay={5000}
                loop
              />
            </span>
            <Zoom>
              <h1 className="text-[9vw] md:text-[7vw] text-center md:text-start font-bold">
                <span className="text-[#EA4335]">G</span>
                <span className="text-[#4285F4]">D</span>
                <span className="text-[#34A853]">S</span>
                <span className="text-[#FBBC05]">C</span> DJSCE,
              </h1>
            </Zoom>
            <ul className="list-none w-full flex justify-between items-center mt-4 text-[5vw] md:text-[2.5vw] pb-5">
              <li className="text-[#EA4335]">Collaborate</li>
              <li className="text-[#4285F4]">Learn</li>
              <li className="text-[#34A853]">Explore</li>
              <li className="text-[#FBBC05]">Create</li>
            </ul>
            <Slide
              direction="up"
              className="text-[4.5vw] text-justify md:text-[1.4vw] md:w-[80%]"
            >
              Meet and learn with other developers and build solutions for
              communities with Google technology.
            </Slide>
          </div>
        </div>
        <Slide
          direction="right"
          className="w-[50%] hidden md:flex justify-center relative"
        >
          <video
            className="w-[70%]"
            src={"/videos/illustration.mp4"}
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </Slide>
      </div>
    </Fade>
  );
};

export default Home;
