"use client";
import { useState } from "react";
import { notFound } from "next/navigation";
import { AiFillCode, AiFillEye, AiFillPlusSquare } from "react-icons/ai";
import { projects } from "~/data/data";
import { MdClose } from "react-icons/md";

export default function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  const [showDetail, setShowDetail] = useState(false);
  const projectId = Number(params.projectId);

  if (isNaN(projectId)) {
    return notFound();
  }

  const p = projects.find((p) => p.id === projectId.toString());

  return (
    <>
      <div className="w-full h-auto grid md:grid-cols-2 gap-x-12 text-black dark:text-white">
        <div className="col-span-3 flex items-center justify-center mb-5">
          <h2 className="text-2xl font-medium md:text-3xl text-black dark:text-white px-1 mx-2">
            {p!.name}
          </h2>

          {p!.category.map((cat) => (
            <span
              key={cat}
              className="px-2 py-3 my-3 m-2 bg-gray-200 dark:bg-black rounded-md text-black dark:text-white"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="col-span-3 md:col-span-2 text-left p-5  rounded-2xl">
          <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider ">
            {p!.key_techs.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 my-1 bg-gray-200 dark:bg-gray-800 rounded-sm text-black dark:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mb-3 font-medium text-black dark:text-white">
            {p!.description}
          </div>
        </div>
        <div className="col-span-3 md:col-span-2 p-5 bg-white dark:bg-gray-900 rounded-2xl">
          <div className="mt-5">
            {p!.other_images.map((imageName, index) => (
              <div
                key={index}
                className="flex items-center md:col-span-1 my-4 space-x-3 p-5 bg-white dark:bg-gray-900 rounded-md"
              >
                <img src={`/images/${imageName}`} alt="project img" />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3 flex justify-center space-x-3 my-3">
          <a
            href={p!.deployed_url}
            target="_blank"
            className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-black text-black dark:text-white dark:hover:bg-gray-900 hover:bg-gray-300 rounded-md"
          >
            <AiFillEye />
            <span>VOIR</span>
          </a>
          <a
            href={p!.github_url}
            target="_blank"
            className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-black text-black dark:text-white dark:hover:bg-gray-900 hover:bg-gray-300 rounded-md"
          >
            <span>REPOSITORY</span> <AiFillCode />
          </a>

          <button
            onClick={() => setShowDetail(true)}
            className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-black text-black dark:text-white dark:hover:bg-gray-900 hover:bg-gray-300 rounded-md"
          >
            <span>PLUS</span>
            <AiFillPlusSquare />
          </button>
          {showDetail && (
            <div className="fixed inset-0 z-10 flex items-center justify-center backdrop-blur  dark:bg-black-500 dark:bg-opacity-50 overflow-auto">
              <div className="w-full h-auto py-14 px-14 text-black  dark:text-white">
                <button
                  onClick={() => setShowDetail(false)}
                  className="absolute p-1 bg-gray-200 dark:bg-gray-800 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
                >
                  <MdClose size={30} />
                </button>
                <div className="flex justify-center items-center">
                  <img
                    src={`/images/${p?.other_url}`}
                    alt="project img"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
