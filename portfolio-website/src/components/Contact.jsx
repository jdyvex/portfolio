import React from "react";
import { motion as m } from "framer-motion";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-bgBlack flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/77815d0b-3f4a-44f8-8073-e7b27e8ac2e1"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-accentYellow text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 pt-6">
            Let's create something together! <br />
            Use the form below or shoot me an email
            <span className="text-accentYellow">
              <a href="mailto:jordan@jordandyvex.com"> here.</a>
            </span>
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6] required"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] required:border-red-500 required:ring-2 required:ring-red-500"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 bg-[#ccd6f6] required:border-red-500 required:ring-2 required:ring-red-500"
          name="message"
          rows="10"
          placeholder="Message"
          
        ></textarea>
        <m.button
          className="text-fontWhite group border-2 px-6 py-3 my-4 flex justify-center hover:bg-btnYellow hover:border-btnYellow hover:text-bgBlack"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's build something!
        </m.button>
      </form>
    </div>
  );
};

export default Contact;
