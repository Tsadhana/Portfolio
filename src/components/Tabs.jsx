import React, { useState } from "react";
import Modal from "./Modal";
import MegaData from "../MegaData"; // Import MegaData

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("ALL"); // Default tab
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    console.log("Project Clicked:", project); // Debugging log
    setSelectedProject(project);
    setIsOpen(true);
  };

  const filteredProjects =
    activeTab === "ALL"
      ? MegaData.projects // Show all projects
      : MegaData.projects.filter((project) => project.category === activeTab);

  return (
    <div className="mx-auto w-full p-5">
      {/* Tab Buttons */}
      <div className="tab flex space-x-4 rounded-xl border-1 border-purple-500">
        {[
          "ALL",
          "UI UX Design",
          "Frontend Technologies",
          "Full Stack Application",
        ].map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer px-5 py-2 text-lg font-medium ${
              activeTab === tab
                ? ", bg-purple-500/12 text-purple-500"
                : "text-purple-500"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div
        className={`mt-4 text-gray-800 ${filteredProjects.length === 0 ? "w-full py-10 text-center" : ""}`}
      >
        {filteredProjects.length === 0 ? (
          <div className="text-white">No projects found for this category.</div>
        ) : (
          <div className="project-grid grid grid-cols-3 place-items-center gap-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => handleProjectClick(project)}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-40 w-full rounded-lg object-cover"
                />
                <div className="project-tech mt-2 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-md bg-gray-200 px-2 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-name mt-2 text-lg font-semibold !text-[#b1b2b3]">
                  {project.name}
                </div>
                <div className="publish text-sm text-gray-500">
                  {project.year}
                </div>
                <div className="description text-sm text-gray-700">
                  {project.description}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          header={
            <>
              <div
                onClick={() => setIsOpen(false)}
                className="mr-4 mb-3 flex cursor-pointer justify-end"
              >
                X
              </div>
              <div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="rounded-lg"
                />
              </div>
              <div className="mt-5 flex flex-col gap-[5px]">
                <div className="!text-[26px] font-[600]">
                  {selectedProject.name}
                </div>
                <div className="text-sm text-[#b1b2b3]">
                  {selectedProject.date}
                </div>
              </div>
            </>
          }
          footer={
            <div className="footer flex gap-[20px]">
              <button className="w-full cursor-pointer rounded-md bg-[transparent] px-4 py-3 text-white">
                <a
                  href={selectedProject.postLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[600]"
                >
                  View Post
                </a>
              </button>
              <button className="w-full cursor-pointer rounded-md bg-[#854ce6] px-4 py-3 text-white">
                <a
                  href={selectedProject.postLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[600]"
                >
                  View Live Project
                </a>
              </button>
            </div>
          }
        >
          <div className="flex flex-col gap-[5px] pt-4 pb-4 text-white">
            <div className="project-tech mt-2 flex flex-wrap gap-2">
              {selectedProject.modalTechnologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-md bg-gray-300 px-2 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-2 text-white">{selectedProject.description}</div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Tabs;
