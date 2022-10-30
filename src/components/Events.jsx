import React, { useEffect, useState } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { EventData } from "../data/EventData";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const EventDetails = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  const [screenW, setWinW] = useState(window.innerWidth);

  const detectSize = () => {
    setWinW(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, []);

  let { id, name, date, desc, link, formLink, pos, notFinished } = props.data;
  if (screenW <= 640) {
    pos = "right";
  }

  return (
    <TimelineItem key={id} position={screenW <= 640 ? "right" : pos} ref={ref}>
      <TimelineOppositeContent sx={screenW <= 640 ? { flex: 0.1 } : null}>
        {screenW <= 640 ? null : <span className="event-date">{date}</span>}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot variant={notFinished ? "outlined" : "filled"} />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent className="event-card">
        {screenW <= 640 ? <span className="event-date">{date}</span> : null}
        <motion.div
          animate={controls}
          initial="hidden"
          variants={{
            hidden: { x: pos === "left" ? -800 : 800 },
            visible: { x: 0, transition: { duration: 1, type: "slide" } },
          }}
          className="event-details"
        >
          <h3 className="tittle">{name}</h3>
          <p>{desc}</p>
          <a href={link}>More details </a>
          <a target="__blank" href={formLink}>
            Register
          </a>
        </motion.div>
      </TimelineContent>
    </TimelineItem>
  );
};

const Events = () => {
  
  return (
    <>
      <motion.div className="event-wrapper"
      initial={{opacity: 0}}
      animate={{opacity:1, transition:{duration:.5, type: 'ease'}}}
      exit={{x: -window.innerWidth, transition:{duration:.3, type: 'slide'}}}
      >
      
        <div className="mainHeading">
          <h2>Upcoming Events</h2>
        </div>
        <Timeline className="timeline" position="alternate">
          {EventData.map((d) => (
            <EventDetails key={d.id} data={d} />
          ))}
        </Timeline>
      </motion.div>
    </>
  );
};

export default Events;
