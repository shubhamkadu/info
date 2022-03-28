import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Project from "./Project";
import Projects from "./Projects";
import Zoom from "react-reveal/Zoom";

function Work({ data, portfolio }) {
  return (
    <div>
      <h1 className="md:text-5xl text-2xl font-bold py-1 md:pb-8 px-6">
        Projects
      </h1>

      <div className=" grid grid-cols-1 gap-y-8  lg:grid-cols-1 xl:grid-cols-1 space-x-6 p-4 md:mx-40 pb-1 pt-4 pl-8 -ml-3 cursor-pointer  rounded-t-md">
        {portfolio?.projects.map(({ title, url, image, demo, description }) => (
          <Zoom>
            <Projects
              key={title}
              title={title}
              url={url}
              image={image}
              demo={demo}
              description={description}
            />
          </Zoom>
        ))}
      </div>

      <div className="">
        <Project />
      </div>
    </div>
  );
}

export default Work;
