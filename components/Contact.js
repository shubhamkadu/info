import { AiOutlineGithub } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { FaDownload } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Jump from "react-reveal/Jump";
import Zoom from "react-reveal/Zoom";
import Flash from "react-reveal/Flash";

import { BsFillTelephoneFill } from "react-icons/bs";

function Contact({ data }) {
  return (
    <div className="bg-gradient-to-r from-indigo-300 via-purple-200 to-red-300">
      <div className="h-full bg-gradient-to-r from-indigo-300 via-purple-200 to-red-300 space-y-3 p-4 grid grid-cols-2 gap-1 mt-24 md:p-10 md:mt-40">
        <div className="flex flex-col space-y-8 justify-between md:flex-row md:items-center ">
          <Zoom bottom>
            <div>
              <Jump>
                <h1 className="text-xl md:text-6xl  font-bold">
                  Contact Details
                </h1>
              </Jump>
              <div className="flex md:text-lg md:space-x-3 space-x-3  pt-5 md:space-y-3 text-black">
                <div className="md:pt-5 pt-1 md:space-y-6 space-y-5 ">
                  <FaUserAlt />
                  <ImLocation2 />
                  <CgMail size={23} />
                  <BsFillTelephoneFill />
                </div>
                <div className="md:space-y-4 space-y-3 font-bold">
                  <h1>{data?.name}</h1>
                  <h1>
                    {data?.address.city},{data?.address.state},
                    {data?.address.zip}
                  </h1>
                  <h1>
                    <a href="mailto: shubhampkadu@gmail.com">{data?.email}</a>
                  </h1>
                  <h1>
                    <a href="tel:+917020868854">+917020868854</a>
                  </h1>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
        <div>
          <Zoom>
            <img
              className=" h-0 md:h-full "
              src="https://user-images.githubusercontent.com/54521023/152731049-cc744a56-1d6f-4945-9566-0fa3b7ad1d24.png"
              alt=""
            />
          </Zoom>
        </div>
      </div>
      <div className="flex text-indigo-800 justify-center space-x-6 ">
        <a
          target="_blank"
          href="https://github.com/shubhamkadu"
          className="hover:text-purple-600 hover:scale-105
        transform transition duration-300 ease-out"
        >
          <AiOutlineGithub className="h-6 w-6 md:h-8 md:w-8" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/shubham-kadu-20b3791bb/"
          className="hover:text-purple-600 hover:scale-105
        transform transition duration-300 ease-out"
        >
          <FiLinkedin className="h-6 w-6 md:h-8 md:w-8" />
        </a>
      </div>
      <div className="flex p-2 text-xs md:text-lg cursor-pointer font-semibold text-indigo-200 justify-center ">
        <h1>
          <span className="hover:text-purple-600 transform font-serif transition duration-300 ease-out">
          Made by{" "}
            shubham
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Contact;
