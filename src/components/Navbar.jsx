"use client";

import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import config from "@/data/config";

const size = 50;

const Navbar = () => {
  const [isMenu, setMenu] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 w-full px-20 pt-5 z-40 max-sm:p-0">
        <div className="flex justify-between items-center bg-black/70 backdrop-blur-sm py-3 px-19 rounded-full max-sm:px-10 max-sm:rounded-none">
          <Image
            src={"/logo/logo.svg"}
            width={size}
            height={size}
            alt="logo"
            className="max-sm:w-10"
          />

          <button
            className={`${
              !isMenu ? "opacity-100" : "opacity-0"
            } transition-all duration-300 ease-in-out cursor-pointer select-none`}
            onClick={() => {
              setMenu(!isMenu);
            }}
          >
            <Image
              className="pointer-events-none max-sm:w-7"
              src={"/icons/menu.svg"}
              width={size - 20}
              height={size - 10}
              alt="menu"
            />
          </button>
        </div>
      </nav>
      {/* menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-50 bg-white ${
          isMenu ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-500"
        } transition duration-375 ease-initial`}
      >
        {/* button for close */}
        <div className="flex justify-between px-38 pt-10 max-sm:px-9 max-sm:pt-4">
          <div></div>
          <button
            className="cursor-pointer hover:scale-105 hover:rotate-180 transition duration-300"
            onClick={() => {
              setMenu(false);
            }}
          >
            <XIcon size={30} color="black" />
          </button>
        </div>
        {/* MENU and LINKS */}
        <div className="flex justify-between px-55 mt-30 max-xl:px-10 max-sm:flex-col max-sm:gap-20">
          <div className="flex items-start">
            <div className="-rotate-90 translate-y-4">MENU</div>
            <div className="flex flex-col space-y-10 text-6xl font-bold uppercase max-sm:text-4xl">
              {config.links.map((item) => {
                return (
                  <Link
                    href={item.href}
                    key={item.name}
                    onClick={(e) => {
                      setMenu(false);
                    }}
                    className="hover:translate-x-3 transition duration-300 ease-in-out"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
          {/* social media */}
          <div className="flex flex-col justify-between items-start">
            <div></div>
            {/* socials */}
            <div>
              <ul className="font-bold">
                <li>
                  <a href={`email:${config.email}`}>{config.email}</a>
                </li>
                <li>
                  <a href={`tel:${config.number}`}>{config.number}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
