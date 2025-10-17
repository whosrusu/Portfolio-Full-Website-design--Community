import config from "@/data/config";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full h-100 flex justify-between items-center px-30 mt-20 max-xl:flex-col max-xl:py-10">
      {/* links */}
      <div className="flex space-x-8">
        {config.links.slice(1).map((item) => {
          return (
            <Link
              href={"/" + item.href}
              key={item.name}
              className="uppercase font-bold"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      {/* contact */}
      <div>
        <ul className="font-bold">
          <li>{config.email}</li>
          <li>+{config.number}</li>
        </ul>
      </div>
      {/* logo */}
      <div>
        <Image src={"/logo/logo.svg"} width={100} height={100} alt="logo" />
      </div>
    </footer>
  );
};

export default Footer;
