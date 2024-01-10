"use client";

import { useState } from "react";
import ProjectCard from "../../src/components/projects/ProjectCard";
import ProjectsNavbar from "../../src/components/projects/ProjectsNavbar";
import { projects as projectsData } from "../../data/data";
import { Category } from "../../types/types";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <div
      className="px-6 py-2 bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-custom-light"
      // style={{ height: "120vh" }}
    >
      <h4 className="text-md font-semibold tracking-wide mb-5">
        Last works...
      </h4>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <div className="grid grid-cols-12 gap-6 px-5 my-14 mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="col-span-12 p-2 bg-gray-200 dark:bg-gray-800 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
          >
            <ProjectCard project={project} key={project.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
