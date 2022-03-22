import Image from "next/image";
// import Particles from "react-particles-js";
import { AiOutlineGithub } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";
import TypeWriter from "react-typewriter";

function Home({ data }) {
  console.log(data);

  return (
    <div
      className="relative h-screen bg-gradient-to-r from-indigo-200 via-purple-300 to-red-200
     shadow-2xl"
    >
      <img
        className="h-screen object-cover w-full"
        src="https://venturebeat.com/wp-content/uploads/2021/09/virtual_reality.jpg?fit=3840%2C2160&strip=all"
      />

      <div className="absolute space-y-4 font-serif top-20 w-full text-center cursor-pointer">
        <h1 className="md:text-8xl p-5 font-extrabold text-transparent text-5xl bg-clip-text bg-white animate-pulse ">
          <TypeWriter typing={1}>{`I'm ${data?.name}`}</TypeWriter>
        </h1>
        <h3 className=" p-2 md:text-xl font-bold text-black">
          <TypeWriter typing={1}>
            Based in India
            <span className="text-gray-700"> FullStack Developer</span>.I eat,
            sleep and breathe Technology
          </TypeWriter>
        </h3>
        <div className="flex text-black justify-center space-x-6 ">
          <div className="flex space-x-6">
            <a
              target="_blank"
              href="https://github.com/shubhamkadu"
              className="hover:text-red-900  md:pt-2 hover:scale-105
            transform transition duration-300 ease-out"
            >
              <AiOutlineGithub size={30} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/shubham-kadu-20b3791bb/"
              className="hover:text-red-900  md:pt-2  hover:scale-105
        transform transition duration-300 ease-out"
            >
              <FiLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
