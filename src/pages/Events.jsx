import React, { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { FaHistory, FaRegCalendarAlt } from "react-icons/fa";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcoming = [
    {
      title: "HackNiche 2.0 Hackathon",
      img: "/images/events/up1.jpeg",
      description:
        "HackNiche 2.0 is where the magic happens – a 24-hour hackathon where brilliant teams collaborate and compete",
      date: "Date: 17th - 18th February, 2024",
    },
    {
      title: "DeepInsight ML Bootcamp",
      img: "/images/events/up2.avif",
      description:
        "Unleash the Power of Data: Elevate your skills with our ML Bootcamp. Dive deep into machine learning, where innovation meets expertise",
      date: "Coming Soon",
    },
    {
      title: "Winter of Code Ideathon",
      img: "/images/events/up3.jpg",
      description:
        "Ideate, Innovate, and Code your way through winter! Join Winter of Code for a season of creative ideation and coding excellence",
      date: "10 Nov, 2023",
    },
  ];

  const past = [
    {
      title: "Google Cloud Study Jams",
      img: "/images/events/p1.webp",
      description:
        "Embark on a journey of cloud mastery with Google Cloud Study Jams — where hands-on learning meets the power of Google Cloud technologies.",
      date: "10 Nov, 2023",
    },
    {
      title: "Winter of Code Ideathon",
      img: "/images/events/up3.jpg",
      description:
        "Ideate, Innovate, and Code your way through winter! Join Winter of Code for a season of creative ideation and coding excellence",
      date: "10 Nov, 2023",
    },
    {
      title: "Winter of Code TechQuiz",
      img: "/images/events/up3.jpg",
      description:
        "Unleash your inner techie, compete, and celebrate the spirit of innovation in a dynamic quiz experience like never before.",
      date: "10 Nov, 2023",
    },
  ];

  const renderEventCards = (events) => {
    return events.map((event, index) => (
      <div
        key={index}
        className="relative flex flex-col my-6 bg-white border border-slate-200 w-96 rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] transition-all hover:shadow-[0_8px_14px_0_rgba(0,0,0,0.2)]"
      >
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
          <img
            src={event.img}
            alt={event.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4">
          <h6 className="mb-2 text-slate-800 text-xl font-semibold">
            {event.title}
          </h6>
          <p className="text-slate-600 leading-normal font-light">
            {event.description}
          </p>
          <p className="text-slate-500 text-sm">{event.date}</p>
        </div>
        <div className="px-4 pb-4 pt-0 mt-2">
          <button
            className="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white hover:bg-blue-700"
            type="button"
          >
            Read more
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="border-b border-gray-200 mt-32">
        <ul className="flex flex-wrap justify-evenly -mb-px text-sm font-medium text-center text-gray-500">
          <li className="me-2">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`inline-flex items-center justify-center p-4 border-b-2 ${
                activeTab === "upcoming"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300"
              } rounded-t-lg group`}
            >
              <FaRegCalendarAlt
                className={`w-4 h-4 me-2 ${
                  activeTab === "upcoming"
                    ? "text-blue-600"
                    : "text-gray-400 group-hover:text-gray-500"
                }`}
              />
              Upcoming
            </button>
          </li>
          <li className="me-2">
            <button
              onClick={() => setActiveTab("past")}
              className={`inline-flex items-center justify-center p-4 border-b-2 ${
                activeTab === "past"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300"
              } rounded-t-lg group`}
            >
              <FaHistory
                className={`w-4 h-4 me-2 ${
                  activeTab === "past"
                    ? "text-blue-600"
                    : "text-gray-400 group-hover:text-gray-500"
                }`}
              />
              Past
            </button>
          </li>
        </ul>
      </div>

      {activeTab === "upcoming" && (
        <div id="upcoming" className="flex flex-wrap justify-center gap-5">
          <Zoom>{renderEventCards(upcoming)}</Zoom>
        </div>
      )}

      {activeTab === "past" && (
        <div id="past" className="flex flex-wrap justify-center gap-5">
          <Zoom>{renderEventCards(past)}</Zoom>
        </div>
      )}
    </div>
  );
};

export default Events;
