import config from "@/data/config";

const About = () => {
  return (
    <div
      className="flex flex-col justify-center items-start w-full h-auto py-20 space-y-15 px-[360px] max-xl:p-10"
      id="about"
    >
      {/* about */}
      <div className="w-auto flex flex-col space-y-5">
        <h1 className="text-3xl text-start font-bold text-black">About me</h1>
        <p className="text-lg text-start text-black font-boboto">
          {config.about}
        </p>
      </div>
      {/* skills */}
      <div className="w-full flex flex-col space-y-5">
        <h1 className="text-3xl text-start font-bold text-black">My Skills</h1>
        <ul className="grid grid-cols-5 text-sm gap-3 max-md:grid-cols-4 max-sm:grid-cols-2">
          {config.skills.map((item) => {
            return (
              <li
                key={item.name}
                className="flex gap-2 items-center font-roboto w-fit"
              >
                {item.icon}
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default About;
