// import { prisma } from "~/src/db/prisma";
"use client";
import { NextPage } from "next";
import { description, subdescription, technologies } from "~/data/data";

const HomePage = () => {
  // const boards = await prisma.board.findMany();
  // throw new Error("Something went wrong");
  // console.log(boards);

  return (
    <div className="h-full col-span-12 p-4 text-base bg-gray-100 dark:bg-gray-900 lg:col-span-3 rounded-2xl shadow-custom-light">
      <div className="flex flex-col flex-grow px-6 pt-1 ">
        <h4 className="my-1 text-md font-semibold tracking-wide">HELLO</h4>
        <h6 className="my-3 text-base text-left font-medium">{description}</h6>

        <div className="flex_col p-4 mt-1 bg-white dark:bg-gray-900 rounded-md">
          <h3 className="my-10 bg-gray-100 dark:bg-gradient-to-l from-gray-900 to-black p-5 text-xl font-bold rounded-md italic text-green-500">
            TECHNOLOGIES
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 p-5">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <tech.Icon
                  style={{
                    // color: "#ffffff",
                    fontSize: "4em",
                    transition: "color 0.3s",
                  }}
                />
                <p className="my-1 text-sm font-semibold tracking-wide p-3">
                  {tech.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h6 className="mt-5 text-base font-medium">{subdescription}</h6>
    </div>
  );
};
export default HomePage;
