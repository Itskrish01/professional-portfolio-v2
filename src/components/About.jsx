import Heading from "./Heading";
import Section from "./Section";
import { roadmap } from "../constants";
import { Meteors } from "./ui/Meteors";

const About = () => (
  <Section className="overflow-hidden mt-44" id="about">
    <div className="container">
      <Heading
        tag="What do i do"
        title="I Know How To Make A Good Web/Mobile Application"
      />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[1rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-3 bg-n-8 rounded-[1rem] overflow-hidden xl:p-6">
                <Meteors />
                <div className="relative z-1">
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </Section>
);

export default About;
