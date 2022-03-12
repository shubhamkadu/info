import Image from "next/image";
// import Particles from "react-particles-js";
import { AiOutlineGithub } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";
import TypeWriter from "react-typewriter";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";

// import particleConfig from "../components/particleConfig.json";
function Home({ data }) {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#000000",
    },
    enter: [
      { opacity: 1, height: 130, innerHeight: 390 },
      { transform: "perspective(600px) rotateX(180deg)", color: "#ffffff" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [
      { color: "#ffffff" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: "#ffffff" },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(
      setTimeout(
        () =>
          set([
            "I'am",
            "shubham kadu",
            "FullStack developer",
            // "Based in India. I eat, sleep and breathe Technology",
          ]),
        2000
      )
    );
    ref.current.push(setTimeout(() => set(["I'am", "shubham kadu"]), 5000));
    ref.current.push(
      setTimeout(
        () =>
          set([
            "I'am",
            "shubham kadu",
            "FullStack developer",
            // " Based in India.I eat, sleep and breathe Technology",
          ]),
        8000
      )
    );
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, []);

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

      <div className="absolute space-y-4 font-serif top-2 w-full text-center cursor-pointer">
        <div>
          {transitions(({ innerHeight, ...rest }, item) => (
            <animated.div
              // className={styles.transitionsItem}
              style={rest}
              onClick={reset}
            >
              <animated.div
                className="md:text-7xl p-5 font-extrabold  text-5xl  animate-pulse "
                style={{ overflow: "hidden", height: innerHeight }}
              >
                {item}
              </animated.div>
            </animated.div>
          ))}
        </div>
        {/* <h1 className="md:text-8xl p-5 font-extrabold text-transparent text-5xl bg-clip-text bg-white animate-pulse ">
          <TypeWriter typing={1}>{`I'm ${name}`}</TypeWriter>
        </h1> */}
        <h3 className=" p-2 md:text-xl font-bold text-black">
          <TypeWriter typing={1}>
            Based in India
            <span className="text-black"></span>.I eat, sleep and breathe
            Technology
          </TypeWriter>
        </h3>
        <div className="flex text-black justify-center space-x-6 ">
          <div className="flex space-x-6">
            <a
              href="https://github.com/shubhamkadu"
              className="hover:text-blue-200  md:pt-2 hover:scale-105
            transform transition duration-300 ease-out"
            >
              <AiOutlineGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/shubham-kadu-20b3791bb/"
              className="hover:text-blue-200  md:pt-2  hover:scale-105
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
