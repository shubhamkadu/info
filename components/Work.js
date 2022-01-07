import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Projects from "./Projects";
function Work({ data, portfolio }) {
  if ((data, portfolio)) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div className="space-y-4" key={education.school}>
          <h3 className="font-bold text-lg md:text-3xl">{education.school}</h3>
          <p className="font-serif md:text-lg">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p className="font-serif md:text-lg">{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div className="space-y-4" key={work.company}>
          <h3 className="font-bold text-lg md:text-3xl">{work.company}</h3>
          <p className="font-serif md:text-lg">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p className="font-serif md:text-lg">{work.description}</p>
        </div>
      );
    });

    var projects = portfolio.projects.map(function (project) {
      return (
        <div className="" key={project.title}>
          <img src={project.url}></img>
        </div>
      );
    });
  }
  return (
    <div>
      <Parallax
        pages={2}
        style={{
          top: "1120px",
          left: "00",
          height: "400px",
        }}
        className="scrollbar-hide"
      >
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            height: "200px",
            backgroundColor: "#808080",
          }}
        >
          <div
            className="h-200px space-y-6 p-3 flex flex-col pt-20 
            md:pt-40 md:p-40 bg-gradient-to-r from-indigo-100 via-purple-200 to-red-200  scrollbar-hide "
          >
            <div className="flex flex-col  space-y-4 md:flex-row md:space-x-28 md:flex items-center ">
              <div className="underline uppercase flex justify-center font-bold md:text-xl ">
                <h1 className="">Education</h1>
              </div>

              <div className="text-center space-y-4 md:text-left">
                {education}
              </div>
            </div>
            <hr className="h-20 " />
            <div className="flex flex-col  space-y-4 md:flex-row md:space-x-44 md:flex items-center ">
              <div className="underline uppercase flex justify-center font-bold md:text-xl ">
                <h1 className="">Work</h1>
              </div>

              <div className="text-center space-y-4 md:text-left">{work}</div>
            </div>
            <hr className="h-20" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2}
          style={{ backgroundColor: "#0000", height: "400px" }}
        >
          <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-red-200 pb-20">
            <h1 className="md:text-3xl text-2xl font-bold py-1 px-6">
              Projects
            </h1>
            <div className="flex bg-gradient-to-r from-indigo-200 via-purple-200 to-red-200  space-x-6 overflow-x-scroll  scrollbar-hide pb-80 pt-4 pl-8 -ml-3 cursor-pointer  rounded-t-md">
              {portfolio?.projects.map(({ title, url, image,demo }) => (
                <Projects key={title} title={title} url={url} image={image} demo={demo}/>
              ))}
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Work;
