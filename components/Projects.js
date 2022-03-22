import Image from "next/image";
import { GrSend } from "react-icons/gr";
import { MdMarkChatUnread } from "react-icons/md";

function Projects({ title, url, image, demo, description }) {
  return (
    <div
      className="md:flex top-1/4 text-center md:space-x-20 p-2 cursor-pointer bg-gradient-to-r from-indigo-200 via-purple-300 to-red-300  rounded-xl  md:hover:scale-105 md:hover:opacity-90 md:hover:shadow-2xl  
      transition: duration-200 ease-out first:border-t"
    >
      <div
        className="relative space-y-4 font-semibold md:pt-20 h-60 w-60  md:h-[400px] md:w-[341px]  
        "
      >
        {!image ? (
          <MdMarkChatUnread className="mx-auto" size={160} />
        ) : (
          <img
            src={image}
            alt=""
            className="rounded-t-xl md:max-h-40 md:mx-auto  max-h-40 mx-auto  "
          />
        )}

        <h1>{title}</h1>
        <div className="flex justify-between  pl-5 md:pl-10 pr-5 md:pr-10 ">
          <div className={`${!demo && "cursor-not-allowed"}`}>
            <a
              target="_blank"
              href={demo}
              className={`relative  px-5 py-2 font-medium text-white group ${
                !demo && "cursor-not-allowed"
              }`}
            >
              <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
              <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>

              <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
              <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
              <span class="relative">
                <button>demo</button>
              </span>
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href={url}
              class="relative px-5 py-2 font-medium text-white group"
            >
              <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
              <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>

              <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
              <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
              <span className="relative">code</span>
            </a>
          </div>
        </div>
      </div>
      <div className="text-xs md:text-lg p-6 md:max-w-sm md:pt-40">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Projects;
