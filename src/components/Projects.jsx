import { projects } from "../constants";
import Heading from "./Heading";
import { PinContainer } from "./PinContainer";
import Section from "./Section";

import { FaLocationArrow } from "react-icons/fa6";

const Projects = () => {
  return (
    <Section id="projects">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Some Of My Cool Projects, I Have Created"
        />
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {projects.map((item) => (
            <a
              href={item.url}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              <PinContainer title={"project"} href={item.url}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <img
                    src={item.imageUrl}
                    alt="cover"
                    className="z-10 object-cover rounded-lg"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.text}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-indigo-300">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
