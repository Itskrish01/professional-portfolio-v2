import Section from "./Section";
import Heading from "./Heading";
import { skills } from "../constants";

const Skills = () => {
  return (
    <Section id="skills">
      <div className="container">
        <Heading title="My Expertise" text="Things that I am good at 😎" />
        <div className="relative">
          <div className="relative z-1 bg-conic-gradient rounded-3xl p-0.5">
            
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden">
              <div className="py-8 px-4 xl:px-8">
                <ul className="flex items-center justify-between gap-y-3 flex-wrap">
                  {skills.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl transition-all hover:scale-[1.2] flex items-center justify-center ${
                        index === 5
                          ? "w-[4rem] h-[4rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-[4rem] h-[4rem] bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 5
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
