import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import config from "@/data/config";

const buttons = [{ name: "Contact me", href: "/contact" }];

const ProjectsList = () => {
  return (
    <div className="w-full h-fit px-10 pt-25 flex flex-col space-y-10">
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(360px,100px))] gap-6 justify-center w-full">
        {config.projects.map((item, index) => {
          return (
            <li className="relative bg-black w-fit h-fit" key={index}>
              <Image
                src={"/projects/prj.png"}
                width={360}
                height={455}
                alt={item.name}
                className="object-cover"
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

export default ProjectsList;
