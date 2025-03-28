import { FaHtml5, FaBootstrap } from "react-icons/fa6";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

const SKILLSLOGO = [
  { icon: <FaHtml5 size="3rem" />, label: "HTML" },
  { icon: <FaCss3Alt size="3rem" />, label: "CSS" },
  { icon: <IoLogoJavascript size="3rem" />, label: "JavaScript" },
  { icon: <FaReact size="3rem" />, label: "React.js" },
  { icon: <RiTailwindCssFill size="3rem" />, label: "Tailwind CSS" },
  { icon: <FaBootstrap size="3rem" />, label: "Bootstrap" },
];

export default function SkillsCard({ skillsTitle, children }) {
  return (
    <div className="border-[1.5px] border-neutral-400 rounded-4xl p-8 flex flex-col gap-2 w-full sm:w-[25rem] h-full lg:w-1/2 shadow-lg">
      <span className="text-neutral-600 text-2xl font-bold mb-6 text-center">
        {skillsTitle}
      </span>

      <div className="grid grid-cols-3 gap-7">{children}</div>
    </div>
  );
}
