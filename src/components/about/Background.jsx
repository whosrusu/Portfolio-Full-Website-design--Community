import Link from "next/link";
import { ArrowRight } from "lucide-react";

const buttons = [
  { name: "All Projects", href: "/projects" },
  { name: "Contact me", href: "/contact" },
];

const Background = () => {
  return (
    <div className="px-[360px] pt-25 flex flex-col space-y-[80px] max-xl:p-10">
      <div>
        <h1 className="about-title">My Background</h1>
        <p className="about-description">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
          <br />
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua.
          <br />
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet.
          <br />
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
          <br />
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla
        </p>
      </div>
      <div>
        <h1 className="about-title">My Hobbies and Interests</h1>
        <p className="about-description">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
          <br />
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet.
          <br />
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla
        </p>
      </div>
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

export default Background;
