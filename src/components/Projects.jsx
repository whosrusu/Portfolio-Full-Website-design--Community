import config from "@/data/config";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const buttons = [
  { name: "All Projects", href: "/projects" },
  { name: "Contact me", href: "/contact" },
];

const Projects = () => {
  return (
    <div className="flex flex-col space-y-15">
      {/* top 3 projects */}
      <div className="w-full flex justify-center items-center">
        <ul className="grid grid-cols-[repeat(auto-fit,360px)] gap-15 justify-center items-center  w-full max-sm:gap-0">
          {config.projects.slice(0, 3).map((item, index) => {
            return (
              <li
                key={index}
                className="relative w-[360px] h-[455px] bg-black max-sm:scale-80"
              >
                <Image
                  src={`/projects/${item.image_url}`}
                  fill
                  property="true"
                  alt={item.name}
                />
                <h1 className="absolute top-0 left-0 text-white font-bold text-xl font-boboto px-5 py-5">
                  {item.name} <br />
                  <span className="top-5 text-white text-sm font-normal">
                    {item.description}
                  </span>
                </h1>
              </li>
            );
          })}
        </ul>
      </div>
      {/* buttons */}
      <div className="flex space-x-15 justify-center max-md:flex-col max-md:space-x-0 max-md:space-y-5 max-md:items-center">
        {buttons.map((item) => {
          return (
            <Link
              href={item.href}
              key={item.href}
              className="bg-[#D9D9D9] w-60 h-15 flex justify-center items-center gap-2 hover:-translate-y-1 shadow-none shadow-black/20 hover:shadow-md active:scale-90 transition-all duration-300 group"
            >
              <ArrowRight
                size={15}
                color="black"
                className="group-hover:rotate-x-180 group-hover:scale-105 transition duration-300 font-boboto font-normal"
              />{" "}
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
