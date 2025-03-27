import shSelectProjectImg from "../assets/images/sh-select.png";
import nearbyXImg from "../assets/images/nearbyX.png";
import { FaAnglesDown } from "react-icons/fa6";

import SectionTitle from "./UI/SectionTitle.jsx";
import ProjectCard from "./UI/ProjectCard.jsx";

export default function Projects() {
  return (
    <>
      <section className="mb-10">
        <SectionTitle exploreText="Browse My Recent" title="Projects" />

        <div className="flex gap-8">
          <ProjectCard
            projectImg={
              <img
                src={shSelectProjectImg}
                alt="SH SELECT project image"
                className="transition-transform duration-300 hover:scale-110 object-contain w-full h-full"
              />
            }
            projectName="SH SELECT Project"
          />
          <ProjectCard
            projectImg={
              <img
                src={nearbyXImg}
                alt="nearbyX project image"
                className="transition-transform duration-300 hover:scale-110 object-center w-full h-full"
              />
            }
            projectName="nearbyX Project"
          />
        </div>
      </section>
      <div className="absolute right-28">
        <FaAnglesDown size="1.8rem" />
      </div>
    </>
  );
}
