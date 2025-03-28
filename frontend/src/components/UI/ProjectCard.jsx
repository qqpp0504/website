// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import classes from "./ProjectCard.module.css";
import { Autoplay, Pagination } from "swiper/modules";
import Button from "./Button.jsx";

export default function ProjectCard({
  projectImgs,
  projectName,
  projectGithub,
  projectLink,
}) {
  return (
    <div className="border-[1.5px] border-neutral-400 rounded-4xl p-8 flex flex-col gap-2 w-full sm:w-[25rem] lg:w-1/2 h-[30rem] shadow-lg">
      <div className={`flex ${classes.swiper} w-full h-full`}>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper bg-black h-full rounded-xl"
        >
          {projectImgs.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt="SH SELECT project image"
                className="transition-transform duration-300 object-cover object-center w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
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
