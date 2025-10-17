"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MailWarningIcon } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [isError, setError] = useState(false);

  function sendMessage() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name) {
      setErrMessage("you have to put the name");
      setError(true);
    } else if (!email) {
      setErrMessage("you have to put the email");
      setError(true);
    } else if (!regex.test(email)) {
      setErrMessage("Email address is not valid.");
      setError(true);
    } else if (!description) {
      setErrMessage(
        "Is a description like this possible, hello my name is...?"
      );
      setError(true);
    } else if (name && email && description) {
      alert("Thanks! Your message is on its way.");
      return;
    }
    setTimeout(() => {
      setErrMessage("");
      setError(false);
    }, 3000);
  }

  return (
    <div className="px-[120px] flex-col space-y-[3rem] pt-25 max-md:px-10">
      {/* err */}
      <AnimatePresence>
        {isError ? (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 100,
              y: 0,
            }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="fixed w-auto h-auto bottom-0 left-1/2 -translate-x-1/2 mb-10 bg-black/70 border-2 border-white/70 backdrop-blur-sm text-white px-10 py-2 rounded-full flex gap-3 justify-center items-center z-50 cursor-pointer"
            onClick={() => setError(false)}
          >
            <MailWarningIcon size={15} /> {errMessage}
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
      {/*  */}
      <h1 className="font-bold text-black text-2xl">Contact me</h1>
      <div className="flex justify-between max-lg:flex-col max-lg:w-full max-lg:gap-10">
        <div>
          <h2 className="text-[1rem] text-black font-bold">Name</h2>
          <input
            type="text"
            placeholder="Your Name"
            required
            className="outline-none border-b-2 border-black w-[34rem] max-xl:w-100 mt-1 px-2 pt-2 max-lg:w-full"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <h2 className="text-[1rem] text-black font-bold">Email</h2>
          <input
            type="email"
            placeholder="email@exemple.com"
            required
            className="outline-none border-b-2 border-black w-[34rem] max-xl:w-100 mt-1 px-2 pt-2 max-lg:w-full"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
      </div>
      <div>
        <h2 className="text-[1rem] text-black font-bold">Nachricht</h2>
        <input
          type="text"
          placeholder="Hello, my name is..."
          className="outline-none border-b-2 border-black w-full mt-1 px-2 pt-2"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <div className="w-full flex justify-center">
        <button
          className="bg-[#D9D9D9] w-60 h-15 flex justify-center items-center gap-2 hover:-translate-y-1 shadow-none shadow-black/20 hover:shadow-md active:scale-90 transition-all duration-300 max-md:w-full"
          onClick={sendMessage}
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
