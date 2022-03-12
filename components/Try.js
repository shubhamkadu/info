import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import styles from "./styles.module.css";

const Page = ({ offset, gradient, onClick }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin}></div>
     <span><h4>shubham</h4></span>
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer
      className={`${styles.text} ${styles.number}`}
      offset={offset}
      speed={0.3}
    >
      <span>
        <h3>hhh</h3>
      </span>
    </ParallaxLayer>
  </>
);

function Try() {
  const parallax = useRef(IParallax);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <div style={{ background: "#dfdfdf" }}>
      <Parallax
        className={styles.container}
        ref={parallax}
        pages={3}
        horizontal
      >
        <Page offset={0} gradient="pink" onClick={() => scroll(1)}>
          <div>
            <h1>hello</h1>
          </div>
        </Page>
        <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
        <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
      </Parallax>
    </div>
  );
}

export default Try;
