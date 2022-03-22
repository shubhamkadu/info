import React, { useEffect, useState } from "react";

import About from "./About";
import Home from "./Home";
import Work from "./Work";
import Resume from "./Resume";
import Contact from "./Contact";
import Project from "./Project";
// import Try from "./Try";

// import Header from "./Header";
// import { useSpring, animated } from "react-spring";

function Feed() {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  console.log(resumeData);
  return (
    <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-red-200">
      <div>
        {/* <Header data={resumeData.main} /> */}
        <Home data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Work data={resumeData.resume} portfolio={resumeData.portfolio} />
        {/* <Project portfolio={resumeData.portfolio} /> */}
        <Contact data={resumeData.main} />
        {/* <Try/> */}
      </div>
    </div>
  );
}

export default Feed;
