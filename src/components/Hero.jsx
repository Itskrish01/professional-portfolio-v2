import { curve } from "../assets";
import Section from "./Section";
import { BackgroundCircles } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./Notification";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="home"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Hello, I am{" "}
            <span className="inline-block relative">
              Krish tasood{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            A Frontend Software Developer & App developer
            <br />
            <span className=" italic text-sm">
              &quot;Creating better UI than AI&quot;
            </span>
          </p>
          <div className="justify-center flex">
            <a
              href="mailto:krishtasood@gmail.com?subject=Website&body=message%20goes%20here"
              className="rounded-md bg-gradient-to-br from-[#e70099] to-[#fd73cf] px-4 py-2 text-lg text-zinc-50 ring-2 ring-[#e70099]/50 ring-offset-1 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-[#e70099]/70 flex items-center gap-2"
            >
              Lets talk
            </a>
          </div>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <ScrollParallax isAbsolutelyPositioned>
                <ul className="hidden absolute -left-[5.5rem] bottom-[20.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                  {heroIcons.map((icon, index) => (
                    <li className="p-3" key={index}>
                      <img src={icon} width={24} height={25} alt={icon} />
                    </li>
                  ))}
                </ul>
              </ScrollParallax>

              <ScrollParallax isAbsolutelyPositioned>
                <Notification
                  className="hidden absolute -right-[5.5rem] bottom-[5rem] w-[13rem] xl:flex"
                  title="Web apps"
                />
              </ScrollParallax>
            </div>
          </div>

          <BackgroundCircles />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
