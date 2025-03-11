import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import MegaData from "../MegaData"; // Import MegaData

export const Experience = () => {
  return (
    <div className="container mx-auto max-w-screen-lg p-6" id="experience">
      <div className="exp-container mb-4 text-center text-3xl font-bold">
        Experience
      </div>
      <div className="exp-text text-center text-base md:text-lg">
        My work experience as a software engineer and working on different
        companies and projects.
      </div>

      <div className="relative w-full">
        <VerticalTimeline
          className="timeline !px-0 !py-0 text-[#854ce6]"
          layout="1-column"
          lineColor="transparent"
          fill="#854ce6"
        >
          {MegaData.experience.map((exp, index) => (
            <div key={index} className="relative">
              {/* Separate Timeline Line Between Elements */}
              {exp.length === 0 && (
                <div className="absolute top-[30px] left-6 h-full w-0.5 bg-purple-500"></div>
              )}

              <VerticalTimelineElement
                className="timelineElement relative z-0 p-0"
                icon={
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="fill-current !text-[2px] text-[#854ce6]"
                    style={{
                      width: "15px",
                      height: "15px",
                      left: "30px",
                      top: "0",
                    }}
                  />
                }
              >
                <div className="p-4">
                  <div className="exp-head flex flex-col items-center gap-4 sm:flex-row">
                    <img
                      src={exp.logo}
                      alt={exp.title}
                      className="h-12 w-12 rounded-lg sm:h-16 sm:w-16"
                    />
                    <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                      <div className="!text-[15px] font-[600] text-[#f2f3f499] sm:!text-[17px]">
                        {exp.title}
                      </div>
                      <div className="!text-[15px] font-[600] text-[#f2f3f499] sm:!text-[17px]">
                        {exp.company}
                      </div>
                      <div className="year text-[12px] font-[400] !text-[#f2f3f499] sm:text-[14px]">
                        {exp.time}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3">
                    <div className="text-justify text-[14px] font-[500] text-[#f2f3f499] sm:text-[15px]">
                      {exp.description}
                    </div>
                    <div className="text-justify text-[14px] font-[500] text-[#f2f3f499] sm:text-[15px]">
                      <b>Skills : &nbsp;</b>
                      {exp.skills}
                    </div>
                  </div>
                </div>
              </VerticalTimelineElement>
            </div>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};
