import config from "@/data/config";

const Hero = ({ title, subTitle }) => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-black text-center space-y-5">
      <h1 className="uppercase text-white font-bold text-8xl transform scale-y-[1.1] origin-top scale-x-55">
        {title}
      </h1>
      <h2 className="text-white uppercase font-medium font-space text-3xl">
        {subTitle}
      </h2>
    </div>
  );
};

export default Hero;
