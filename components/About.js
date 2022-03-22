import { FaDownload } from "react-icons/fa";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

function About({ data }) {
  return (
    <div className="">
      <div className=" flex flex-col-2 p-2 justify-between px-10 md:px-10 md:space-x-12 pt-20 md:p-40  bg-gradient-to-r from-indigo-200 via-purple-200 to-red-200 text-white  ">
        <div clasName="">
          <Zoom>
            <img className="h-0 md:h-screen" src="/about.png" alt="" />
          </Zoom>
        </div>
        <div className="space-y-6 md:space-y-20 md:pt-20">
          <Slide top>
            <h1 className=" text-2xl md:text-6xl font-bold   text-white ">
              About Me
            </h1>
          </Slide>
          <div className="flex text-md md:text-xl">
            <Fade>
              <p className="flex-grow-0 w-90 md:max-w-2xl text-black text-justify">
                {data?.bio}
              </p>
            </Fade>
          </div>

          <div>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/17vcBnFnWJtNA49ODY3OMwZ1RvN7FEWIi/view?usp=sharing"
            >
              <div className="flex  md:ml-80 md:mt-[20px] max-w-[120px]  bg-white rounded-lg text-black p-3 space-x-2">
                <button className="font-semibold md:text-1xl">Resume</button>
                <FaDownload className="mt-2" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
