import { useEffect } from "react";
import { FaAnglesDown } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

import shSelectProjectImg from "../assets/images/sh-select.png";
import shSelectProjectImg2 from "../assets/images/sh-select2.png";
import shSelectProjectImg3 from "../assets/images/sh-select3.png";
import shSelectProjectImg4 from "../assets/images/sh-select4.png";
import shSelectProjectImg5 from "../assets/images/sh-select5.png";
import shSelectProjectImg6 from "../assets/images/sh-select6.png";
import shSelectProjectImg7 from "../assets/images/sh-select7.png";
import shSelectProjectImg8 from "../assets/images/sh-select8.png";
import nearbyXImg from "../assets/images/nearbyX.png";
import nearbyXImg2 from "../assets/images/nearbyX2.png";
import nearbyXImg3 from "../assets/images/nearbyX3.png";
import SectionTitle from "./UI/SectionTitle.jsx";
import ProjectCard from "./UI/ProjectCard.jsx";

const projectImages1 = [
  shSelectProjectImg,
  shSelectProjectImg2,
  shSelectProjectImg3,
  shSelectProjectImg4,
  shSelectProjectImg5,
  shSelectProjectImg6,
  shSelectProjectImg7,
  shSelectProjectImg8,
];

const projectImages2 = [nearbyXImg, nearbyXImg2, nearbyXImg3];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <section id="projects" className="pt-4 mb-10" data-aos="fade-up">
        <SectionTitle exploreText="Browse My Recent" title="Projects" />

        <div className="flex gap-8 flex-col lg:flex-row items-center">
          <ProjectCard
            projectImgs={projectImages1}
            projectName="SH SELECT Project"
            projectGithub="https://github.com/qqpp0504/sh-select-project"
            projectLink="https://qqpp0504.github.io/sh-select-project"
          />
          <ProjectCard
            projectImgs={projectImages2}
            projectName="nearbyX Project"
            projectGithub="https://github.com/qqpp0504/nearbyX"
            projectLink="https://qqpp0504.github.io/nearbyX"
          />
        </div>
      </section>
      <div className="absolute right-10 lg:right-28" data-aos="fade-up">
        <FaAnglesDown size="1.8rem" />
      </div>
    </>
  );
}
