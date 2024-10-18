import React, { useState } from "react";
import {
  coreTeam,
  webDevTeam,
  //   appDevTeam,
  //   mlDevTeam,
} from "../assets/constants";
import {
  FaUsers,
  FaRegBuilding,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Zoom } from "react-awesome-reveal";

const Team = () => {
  const [activeTab, setActiveTab] = useState("core"); // State for switching tabs

  const renderTeam = (team) => (
    <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {team.map((member, index) => (
        <div key={index} className="space-y-4">
          {console.log(team)}
          <img
            alt={member.name}
            className="object-cover h-56 mx-auto mb-4 bg-center rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] transition-all hover:shadow-[0_8px_14px_0_rgba(0,0,0,0.2)]"
            src={member.image}
          />
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-semibold">{member.name}</h4>
            <p className="text-sm dark:text-gray-600">{member.title || ""}</p>
            <div className="flex mt-2 space-x-2">
              <a
                rel="noopener noreferrer"
                href={member.socialLinks.instagram} // Link to Instagram
                title="Instagram"
                className="dark:text-gray-600"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                rel="noopener noreferrer"
                href={member.socialLinks.github} // Link to GitHub
                title="GitHub"
                className="dark:text-gray-600"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                rel="noopener noreferrer"
                href={member.socialLinks.linkedin} // Link to LinkedIn
                title="LinkedIn"
                className="dark:text-gray-600"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="mt-32">
      <div className="container pb-10 mx-auto space-y-16">
        <div className="border-b border-gray-200 mt-16">
          <ul className="flex flex-wrap justify-evenly -mb-px text-sm font-medium text-center text-gray-500">
            <li className="me-2">
              <button
                onClick={() => setActiveTab("core")}
                className={`inline-flex items-center justify-center p-4 border-b-2 ${
                  activeTab === "core"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300"
                } rounded-t-lg group`}
              >
                <FaUsers
                  className={`w-4 h-4 me-2 ${
                    activeTab === "core"
                      ? "text-blue-600"
                      : "text-gray-400 group-hover:text-gray-500"
                  }`}
                />
                Core Team
              </button>
            </li>
            <li className="me-2">
              <button
                onClick={() => setActiveTab("co-com")}
                className={`inline-flex items-center justify-center p-4 border-b-2 ${
                  activeTab === "co-com"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300"
                } rounded-t-lg group`}
              >
                <FaRegBuilding
                  className={`w-4 h-4 me-2 ${
                    activeTab === "co-com"
                      ? "text-blue-600"
                      : "text-gray-400 group-hover:text-gray-500"
                  }`}
                />
                Co-com Team
              </button>
            </li>
          </ul>
        </div>
        {activeTab === "core" ? (
          <Zoom>{renderTeam(coreTeam)}</Zoom>
        ) : (
          <div className="space-y-12">
            <Zoom>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-9">
                Web Development Team
              </h2>
              {renderTeam(webDevTeam)}
            </Zoom>
            {/* <div>
              <h2 className="text-lg font-semibold">App Development Team</h2>
              {renderTeam(appDevTeam)}
            </div>
            <div>
              <h2 className="text-lg font-semibold">Machine Learning Team</h2>
              {renderTeam(mlDevTeam)}
            </div> */}
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
