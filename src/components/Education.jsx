import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import MegaData from "../MegaData";

export const Education = () => {
  return (
    <div className="container mx-auto p-6" id="education">
      <div className="edu-container mb-4 text-center text-3xl font-bold">
        Education
      </div>
      <div className="edu-text text-center">
        My education has been a journey of self-discovery and growth.
        <br /> My educational details are as follows.
      </div>

      <div className="relative" style={{ margin: "0 auto " }}>
        <VerticalTimeline
          className="timeline !px-0 !py-0 text-[#854ce6]"
          layout="1-column"
          lineColor="transperent"
          fill=" #854ce6"
        >
          {MegaData.education.map((edu, index) => (
            <div key={index} className="relative">
              {/* Separate Timeline Line Between Elements */}
              {edu.length !== 0 && (
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
                <div className="edu-card p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={edu.logo}
                      alt={edu.institute}
                      className="h-10 w-10 rounded-lg"
                    />
                    <div className="flex flex-col items-start">
                      <div className="institute text-start text-[17px] font-[600] text-[#f2f3f499] sm:text-[14px]">
                        {edu.institute}
                      </div>
                      <div className="course text-[12px] font-[500] !text-[#f2f3f499] sm:text-[14px]">
                        {edu.course}
                      </div>
                      <div className="year text-[12px] font-[400] !text-[#f2f3f499] sm:text-[14px]">
                        {edu.year}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3">
                    <div className="grade text-justify text-[15px] font-[500] text-[#f2f3f499]">
                      <b>Grade :</b> {edu.grade}
                    </div>
                    <div className="completion text-justify text-[15px] font-[500] text-[#f2f3f499]">
                      {edu.completion}
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
