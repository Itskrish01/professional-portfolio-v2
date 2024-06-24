import { BiLink } from "react-icons/bi";

export const ProjectCard = ({
  techStack,
  name,
  description,
  link,
  imageSrc,
}) => {
  return (
    <div className="rounded-xl border shadow flex flex-col justify-between bg-slate-900/20 text-slate-200 border-slate-700 hover:bg-zinc-900 transition-all duration-500 ease-in-out hover:border-[#86336b] cursor-text md:min-h-[500px]">
      <div className="space-y-4 p-6 flex flex-col ">
        <h1 className="font-semibold tracking-tight text-2xl line-clamp-1">
          {name}
        </h1>
        <div className="flex gap-2">
          {techStack.map((item) => {
            return (
              <span
                key={item}
                className="inline-flex items-center border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-primary-foreground shadow hover:bg-primary/80 bg-neutral-800 font-light rounded-sm lowercase"
              >
                {item}
              </span>
            );
          })}
        </div>

        <p className=" text-sm  text-neutral-400 font-light  line-clamp-3 sm:line-clamp-4 md:line-clamp-5">
          {description}
        </p>
        <img
          src={imageSrc}
          alt="Project screenshot"
          className="w-full mt-4 rounded-lg"
        />
      </div>
      <div className="flex justify-between mt-4 p-6">
        <div className="flex space-x-2">
          <a href={link} className="text-blue-500">
            Live
          </a>
          <BiLink className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};
