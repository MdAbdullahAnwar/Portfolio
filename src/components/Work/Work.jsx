import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="relative py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-[#0d0b20] bg-skills-gradient bg-blend-overlay fade-right-overlay"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of real-world applications built using modern tech stacks.
        </p>
      </div>

      {/* Projects List - Horizontal Layout */}
      <div className="flex flex-col gap-12 mb-10">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="flex flex-col md:flex-row border border-white bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover:shadow-purple-500/50 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image Left */}
            <div className="md:w-1/2 w-full h-64 md:h-auto">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover md:rounded-l-2xl rounded-t-2xl"
              />
            </div>

            {/* Content Right */}
            <div className="p-6 flex flex-col justify-between md:w-1/2 w-full">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs text-purple-500 font-medium px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-800 hover:bg-purple-700 text-gray-300 py-2 px-4 rounded-xl text-sm font-semibold"
                >
                  View Code
                </a>
                <a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-purple-600 hover:bg-purple-800 text-white py-2 px-4 rounded-xl text-sm font-semibold"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
