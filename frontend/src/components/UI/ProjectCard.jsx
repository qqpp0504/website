import Button from "./Button.jsx";

export default function ProjectCard({ projectImg, projectName }) {
  return (
    <div className="border-[1.5px] border-neutral-400 rounded-4xl p-8 flex flex-col gap-2 w-1/2 h-full">
      <div className="rounded-3xl overflow-hidden w-full h-[20rem]">
        {projectImg}
      </div>

      <div className="text-center font-bold text-2xl my-3">{projectName}</div>

      <div className="flex justify-center gap-5">
        <Button className="border-[1.5px] border-neutral-400 font-semibold">
          GitHub
        </Button>
        <Button className="border-[1.5px] border-neutral-400 font-semibold">
          Live Demo
        </Button>
      </div>
    </div>
  );
}
