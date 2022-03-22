import React, { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";

import data from "./Data";
import styles from "./styles.module.css";

function Project() {
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "40%" },
    to: {
      size: open ? "100%" : "10%",
      //   background: open ? "white" : "hotpink",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);
  return (
    <>
      <div className={`md:h-80 p-4  ${styles.wrapper}`}>
        <animated.div
          style={{ ...rest, width: size, height: size }}
          className={`grid  grid-cols-2 md:grid-cols-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-red-400 ${styles.container}`}
          onClick={() => set((open) => !open)}
        >
          <h1
            className={`md:mx-auto text-xs -ml-2  md:text-xl md:font-bold md:ml-4 `}
          >
            {open ? "less" : "more"}
          </h1>
          {transition((style, item) => (
            <animated.div
              className={`${styles.item}`}
              style={{ ...style, background: item.css }}
            >
              <a target="_blank" href={item.url}>
                <h1 className="p-4 text-lg font-thin">{item.name}</h1>
              </a>
            </animated.div>
          ))}
        </animated.div>
      </div>
    </>
  );
}

export default Project;
