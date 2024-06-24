import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

import { ProjectCard } from "./design/Projects";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Projects = () => {
  const swiperRef = useRef();
  return (
    <Section id="projects">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Some Of My Cool Projects, I Have Created"
        />
        <Swiper
          spaceBetween={50}
          modules={[Navigation]}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {projects.map((item) => (
            <SwiperSlide key={item.id}>
              <ProjectCard
                description={item.text}
                techStack={item.techStack}
                imageSrc={item.imageUrl}
                name={item.title}
                link={item.url}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-16 flex justify-center gap-4">
          <button
            className="flex justify-center items-center hover:bg-pink-500 hover:text-white transistion-all duration-300 border-pink-500 p-3 rounded-full border-2"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <BsArrowLeft />
          </button>
          <button
            className="flex justify-center items-center hover:bg-pink-500 hover:text-white transistion-all duration-300 border-pink-500 p-3 rounded-full border-2"
            onClick={() => swiperRef.current?.slideNext()}
          >
            {" "}
            <BsArrowRight />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
