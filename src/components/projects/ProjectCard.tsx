import { FunctionComponent, useState } from "react";
import { Project } from "../../../types/types";
import Link from "next/link";
import Image from "next/image";

const ProjectCard: FunctionComponent<{
  project: Project;
}> = ({ project: { id, name, image_path } }) => {
  return (
    <div className="card p-2 max-w-[400px] mx-auto flex flex-col">
      <Link href={`/projects/${id}`}>
        <div className="relative overflow-hidden rounded-md cursor-pointer mb-2">
          <Image
            src={image_path}
            alt={name}
            width={400}
            height={250}
            className="object-cover rounded-md"
          />
        </div>
        <p className="text-center font-semibold mt-auto">{name}</p>
      </Link>
    </div>
  );
};

export default ProjectCard;
