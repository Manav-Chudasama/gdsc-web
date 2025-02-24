import React from "react";
import { Zoom } from "react-awesome-reveal";

const Gallery = () => {
  return (
    <div className="w-full px-2 py-2 columns-2 lg:columns-4 mt-20">
      <Zoom>
        <div>
          <img
            className="mb-2 rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] transition-all hover:shadow-[0_8px_14px_0_rgba(0,0,0,0.2)]"
            src="images/gallery/g1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="mb-2 rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] transition-all hover:shadow-[0_8px_14px_0_rgba(0,0,0,0.2)]"
            src="images/gallery/g3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="mb-2 rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] transition-all hover:shadow-[0_8px_14px_0_rgba(0,0,0,0.2)]"
            src="images/gallery/g2.jpg"
            alt=""
          />
        </div>
        <div>
          <video
            className="mb-2 rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] transition-all hover:shadow-[0_8px_14px_0_rgba(0,0,0,0.2)]"
            src="/videos/gallery/v1.mp4"
            autoPlay
            loop
            controls
          ></video>
        </div>
        <div>
          <img
            className="mb-2 rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] transition-all hover:shadow-[0_8px_14px_0_rgba(0,0,0,0.2)]"
            src="images/gallery/g2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="mb-2 rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] transition-all hover:shadow-[0_8px_14px_0_rgba(0,0,0,0.2)]"
            src="images/gallery/g1.jpg"
            alt=""
          />
        </div>
        <div>
          <video
            className="mb-2 rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] transition-all hover:shadow-[0_8px_14px_0_rgba(0,0,0,0.2)]"
            src="/videos/gallery/v2.mp4"
            autoPlay
            loop
            controls
          ></video>
        </div>
        <div>
          <img
            className="mb-2 rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] transition-all hover:shadow-[0_8px_14px_0_rgba(0,0,0,0.2)]"
            src="images/gallery/g3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="mb-2 rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] transition-all hover:shadow-[0_8px_14px_0_rgba(0,0,0,0.2)]"
            src="images/gallery/g1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="mb-2 rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] transition-all hover:shadow-[0_8px_14px_0_rgba(0,0,0,0.2)]"
            src="images/gallery/g3.jpg"
            alt=""
          />
        </div>
        <div>
          <video
            className="mb-2 rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] transition-all hover:shadow-[0_8px_14px_0_rgba(0,0,0,0.2)]"
            src="/videos/gallery/v3.mp4"
            autoPlay
            loop
            controls
          ></video>
        </div>
      </Zoom>
    </div>
  );
};

export default Gallery;
