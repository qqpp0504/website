import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

import myResumePdf from "../assets/resume/resume-hanwei.pdf";
import myImage from "../assets/images/my-image.jpg";
import Button from "./UI/Button.jsx";

export default function StartInfo() {
  return (
    <section className="flex flex-col justify-center items-center gap-20 my-16 lg:mt-60 lg:mb-10 lg:flex-row">
      <div className="w-[20rem] min-w-[20rem] min-h-[20rem] lg:min-w-[25rem] h-[20rem] lg:min-h-[25rem] rounded-full overflow-hidden">
        <img
          src={myImage}
          alt="My image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-center flex flex-col gap-3">
        <p className="text-lg">Hello, I'm</p>
        <p className="text-4xl font-bold">韓惟晞</p>
        <p className="font-bold text-neutral-600 text-3xl">
          Frontend Developer
        </p>
        <div className="flex gap-4 mt-2">
          <a href={myResumePdf} download={myResumePdf}>
            <Button className="font-semibold border-[1.5px] cursor-pointer transition duration-300 hover:bg-neutral-700 hover:text-white">
              Download CV
            </Button>
          </a>

          <a href="#contact">
            <Button className="font-semibold bg-neutral-700 cursor-pointer text-white transition duration-300 hover:bg-black">
              Contact Info
            </Button>
          </a>
        </div>
        <div className="flex justify-center gap-4 mt-3">
          <a href="https://github.com/qqpp0504">
            <FaGithub size="2rem" />
          </a>

          <a href="https://www.linkedin.com/in/%E6%83%9F%E6%99%9E-%E9%9F%93-62ab30321/">
            <IoLogoLinkedin size="2rem" />
          </a>
        </div>
      </div>
    </section>
  );
}
