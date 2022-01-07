import { AiOutlineGithub } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";

function Contact() {
  return (
    <div className="bg-gradient-to-r from-indigo-400 via-purple-200 to-red-400 space-y-3 pt-2 h-40">
      <div className="flex  pt-8 text-indigo-300 justify-center space-x-6 ">
        <a
          href="https://github.com/shubhamkadu"
          className="hover:text-purple-600 hover:scale-105
        transform transition duration-300 ease-out"
        >
          <AiOutlineGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/shubham-kadu-20b3791bb/"
          className="hover:text-purple-600 hover:scale-105
        transform transition duration-300 ease-out"
        >
          <FiLinkedin size={30} />
        </a>
      </div>
      <div className="flex cursor-pointer font-semibold text-indigo-300 justify-center ">
        <h1>
          Made by{" "}
          <span className="hover:text-purple-600 transform transition duration-300 ease-out">
            shubham
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Contact;
