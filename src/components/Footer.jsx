import { socials } from "../constants";
import MagicButton from "./design/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="w-full pt-20 pb-10 px-5 sm:px-20" id="contact">
      {/* background grid */}

      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl md:text-5xl text-center lg:max-w-[45vw]">
          Ready to take <span className="text-pink-400">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            handleClick={() => {
              window.location.href =
                "mailto:krishtasood@gmail.com?subject=Website&body=message%20goes%20here";
            }}
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {date.getFullYear()} Krish tasood
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socials.map((info) => (
            <a
              href={info.url}
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.iconUrl} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
