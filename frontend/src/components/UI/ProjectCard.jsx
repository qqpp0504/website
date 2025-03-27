import Button from "./Button.jsx";

export default function ProjectCard({
  projectImg,
  projectName,
  projectGithub,
  projectLink,
}) {
  return (
    <div className="border-[1.5px] border-neutral-400 rounded-4xl p-8 flex flex-col gap-2 w-full sm:w-[25rem] lg:w-1/2 h-full">
      <div className="rounded-3xl overflow-hidden w-full h-[20rem]">
        {projectImg}
      </div>

      <div className="text-center font-bold text-2xl my-3">{projectName}</div>

      <div className="flex justify-center gap-5">
        <a href={projectGithub} target="_blank">
          <Button className="border-[1.5px] border-neutral-400 font-semibold cursor-pointer transition duration-300 hover:bg-neutral-700 hover:text-white">
            GitHub
          </Button>
        </a>

        <a href={projectLink} target="_blank">
          <Button className="border-[1.5px] border-neutral-400 font-semibold cursor-pointer transition duration-300 hover:bg-neutral-700 hover:text-white">
            Live Demo
          </Button>
        </a>
      </div>
    </div>
  );
}
