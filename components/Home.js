import Image from "next/image";
// import Particles from "react-particles-js";
import { AiOutlineGithub } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";
import TypeWriter from "react-typewriter";

// import particleConfig from "../components/particleConfig.json";
function Home({ data }) {
  console.log(data);
  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <div
      className="relative h-screen bg-gradient-to-r from-indigo-200 via-purple-300 to-red-200
     shadow-2xl"
    >
      <img
        className="h-screen object-cover w-full"
        src="https://venturebeat.com/wp-content/uploads/2021/09/virtual_reality.jpg?fit=3840%2C2160&strip=all"
      />
      {/* <Particles params={particleConfig} height="500px" /> */}

      <div className="absolute space-y-4 top-40 w-full text-center ">
        <h1 className="md:text-8xl p-5 font-extrabold text-transparent text-5xl bg-clip-text bg-white animate-pulse ">
          <TypeWriter typing={1}>{`I'm ${name}`}</TypeWriter>
        </h1>
        <h3 className=" p-2 md:text-xl font-bold text-black">
          Based in {city}. <span className="text-black">{occupation}</span>.{" "}
          {description}
        </h3>
        <div className="flex text-black justify-center space-x-6 ">
          <a
            href="https://github.com/shubhamkadu"
            className="hover:text-yellow-600 hover:scale-105
        transform transition duration-300 ease-out"
          >
            <AiOutlineGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-kadu-20b3791bb/"
            className="hover:text-yellow-600 hover:scale-105
        transform transition duration-300 ease-out"
          >
            <FiLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
