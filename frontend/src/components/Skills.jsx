import {
  FaHtml5,
  FaBootstrap,
  FaSass,
  FaNodeJs,
  FaAnglesDown,
} from "react-icons/fa6";
import { FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";

import SectionTitle from "./UI/SectionTitle.jsx";
import SkillsCard from "./UI/SkillsCard.jsx";

const FRONTENDSKILLSLOGO = [
  { icon: <FaHtml5 size="3rem" />, label: "HTML" },
  { icon: <FaCss3Alt size="3rem" />, label: "CSS" },
  { icon: <IoLogoJavascript size="3rem" />, label: "JavaScript" },
  { icon: <FaReact size="3rem" />, label: "React.js" },
  { icon: <FaSass size="3rem" />, label: "SASS" },
  { icon: <RiTailwindCssFill size="3rem" />, label: "Tailwind CSS" },
  { icon: <FaBootstrap size="3rem" />, label: "Bootstrap" },
];

const OTHERSSKILLSLOGO = [
  { icon: <FaNodeJs size="3rem" />, label: "Node.js" },
  { icon: <SiVite size="3rem" />, label: "Vite" },
  { icon: <FaGitAlt size="3rem" />, label: "Git" },
];

export default function Skills() {
  return (
    <>
      <section id="skills" className="pt-4 mb-10">
        <SectionTitle exploreText="View My" title="Skills" />

        <div className="flex flex-col lg:flex-row gap-8 lg:h-[25rem] items-center">
          <SkillsCard skillsTitle="Frontend Development">
            {FRONTENDSKILLSLOGO.map((skill) => (
              <div
                key={skill.label}
                className="flex flex-col justify-center items-center transition-all duration-300 hover:rotate-12"
              >
                {skill.icon}
                <span>{skill.label}</span>
              </div>
            ))}
          </SkillsCard>

          <SkillsCard skillsTitle="Others">
            {OTHERSSKILLSLOGO.map((skill) => (
              <div
                key={skill.label}
                className="flex flex-col justify-center items-center transition-all duration-300 hover:rotate-12"
              >
                {skill.icon}
                <span>{skill.label}</span>
              </div>
            ))}
          </SkillsCard>
        </div>
      </section>
      <div className="absolute right-10 lg:right-28">
        <FaAnglesDown size="1.8rem" />
      </div>
    </>
  );
}
