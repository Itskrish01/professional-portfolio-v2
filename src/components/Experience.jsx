import { logo } from "../assets";
import { skillsApps, experienceContent } from "../constants";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Experience = () => {
  return (
    <Section crosses id="experience">
      <div className="container lg:flex">
        <div className="">
          <h2 className="h2">Working Experience</h2>

          <ul className="max-w-[30rem]">
            {experienceContent.map((item) => (
              <li
                className="mb-5 rounded-md   lg:border-t border-transparent mt-10"
                key={item.id}
              >
                <div className="">
                  <h6 className="body-4 font-bold">{item.companyName}</h6>
                  <div className="flex flex-col">
                    <small className="text-sm text-n-3">{item.position}</small>
                    <small className="text-xs text-n-4 mt-2">
                      {item.duration}
                    </small>
                  </div>

                  <p className="mt-2 text-n-3 text-sm">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.tags.map((item) => (
                      <div
                        className="text-xs rounded-full bg-pink-500/20 px-2 py-1 text-pink-500"
                        key={item}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-[15rem]">
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img src={logo} width={48} height={48} alt="brainwave" />
                </div>
              </div>
            </div>
            <ul>
              {skillsApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
