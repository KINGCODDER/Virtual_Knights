import React, { useEffect } from "react";
import president from "../Resource/ShivanshSaxena .jpg";
import TeamCard from "./TeamCard";
import image1 from "../Resource/image.png";
import image2 from "../Resource/Agrim.png";
import image3 from "../Resource/Arpit.png";
import image4 from "../Resource/Hitesh.png";
import image5 from "../Resource/Kartick.png";
import image6 from "../Resource/Nishant.png";
import image7 from "../Resource/Shagun.png";
import "../st.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutUs() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if(inView1){
      controls.start("visible")
    }
  }, [controls, inView, inView1]);
  return (
    <motion.div
      className="about_us container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, type: "ease" } }}
      exit={{
        x: -window.innerWidth,
        transition: { duration: 0.3, type: "slide" },
      }}
    >
      <div className="banner container">
        <motion.div
        initial={{opacity:0}}
          animate={{opacity:1, transition:{duration:.5, type:'ease',delay:1.5}}}
         className="heading">
          <h1>About Us</h1>
        </motion.div>
        <div className="leadership_details">
          <motion.div
          initial={{opacity:0}}
          animate={{opacity:1, transition:{duration:.5, type:'ease',delay:1.75}}}
           className="details_about_us">
            <p>
              CESTA, Computer Technical Society functions under the Computer
              Science and Engineering Department. This society runs by the
              students under the guidance of faculty and technical society
              heads.
            </p>
          </motion.div>
          <motion.div
          initial={{opacity:0}}
          animate={{opacity:1, transition:{duration:.5, type:'ease',delay:.5}}}
           className="president_image">
            <img src={president} alt="" />
          </motion.div>
        </div>
        <motion.button
        initial={{opacity:0}}
          animate={{opacity:1, transition:{duration:.5, type:'ease',delay:2}}}
         className="button button-custom">
          <span>JOIN US</span>
        </motion.button>
        <motion.div
        initial={{opacity:0}}
          animate={{opacity:1, transition:{duration:.5, type:'ease',delay:1}}}
         className="president_detail">
          <span>
            President <br />
          </span>
          <span>Shivansh Saxena</span>
        </motion.div>
      </div>

      <div className="team my-6">
        <h2>meet our team</h2>

        <div className="row">
          <TeamCard
            image={image1}
            name={"Pragya Bharti"}
            designation={"Vice-President"}
          />
          <TeamCard
            image={image2}
            name={"AgrimKulshrestha"}
            designation={"Event Coordinator"}
          />
          <TeamCard
            image={image3}
            style={{ top: "-19px" }}
            name={"Arpit Kumar Singh"}
            designation={"Secretary"}
            details_style={{
              top: "-121px",
            }}
          />
          <TeamCard
            image={image4}
            name={"Hitesh Bardia"}
            designation={"Treasurer"}
            details_style={{ top: "-165px" }}
          />
          <TeamCard
            image={image5}
            name={"Kartick Chauhaan"}
            details_style={{ top: "-225px" }}
            style={{ top: "-91px", right: "45px", width: "56%" }}
            designation={"Vice General Secretary"}
          />
          <TeamCard
            image={image6}
            name={"Nishant Bharti"}
            designation={"General Secretary"}
          />
          <TeamCard
            image={image7}
            name={"Shagun Srivastava"}
            designation={"Event Coordinator"}
            style={{ top: "-14px" }}
            details_style={{ top: "-101px" }}
          />
        </div>
      </div>

      <div className="our_objective">
        <h2>Our Objective and Membership Details</h2>
        <div className="objectives container">
          <div className="custom-list">
            <motion.h4
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.5, type: "ease" },
                },
              }}
              className="my-3"
            >
              Our Objective:{" "}
            </motion.h4>
            <ul className="custom-list">
              <motion.li
                animate={controls}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.3, type: "ease", delay: 0.5 },
                  },
                }}
              >
                To provide a platform where students can case their technical,
                leadership and communication skills.
              </motion.li>
              <motion.li
                animate={controls}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.3, type: "ease", delay: 0.8 },
                  },
                }}
              >
                To promote their technical skills related to latest technology.
              </motion.li>
              <motion.li
                animate={controls}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.3, type: "ease", delay: 1.2 },
                  },
                }}
              >
                To provide a competitive environment among the students.
              </motion.li>
              <motion.li
                animate={controls}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.3, type: "ease", delay: 1.5 },
                  },
                }}
              >
                To facilitate the environment for innovative ideas.
              </motion.li>
              <motion.li
                animate={controls}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.3, type: "ease", delay: 1.8 },
                  },
                }}
              >
                To build the Practical Approach among the students.
              </motion.li>
            </ul>
          </div>
          <div className="custom-list-2">
            <motion.h4
              ref={ref1}
              animate={controls}
              initial="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 0.5, type: "ease" },
                },
              }}
              className="my-3"
            >
              For Membership:{" "}
            </motion.h4>
            <ul className="custom-list-2">
              <motion.li
                animate={controls}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.3, type: "ease", delay:.5 },
                  },
                }}
              >
                Membership of CESTA is open to all students of DTC.
              </motion.li>
              <motion.li
                animate={controls}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.3, type: "ease",delay:.75 },
                  },
                }}>
                All the members are involved in developing society purposes.
              </motion.li>
              <motion.li
                animate={controls}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.3, type: "ease",delay:1 },
                  },
                }}>
                The officers shall be President, Vice-President, General
                Secretary, Vice-General Secretary, Secretary and Treasurer.
              </motion.li>
              <motion.li
                animate={controls}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.3, type: "ease",delay:1.25 },
                  },
                }}>Officers are elected through the elections.</motion.li>
              <motion.li
                animate={controls}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.3, type: "ease",delay:1.5 },
                  },
                }}>Nominations will be filled before the elections.</motion.li>
              <motion.li
                animate={controls}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.3, type: "ease",delay:1.75 },
                  },
                }}>
                A majority of all the votes shall be necessary for a candidate
                to be elected.
              </motion.li>
              <motion.li
                animate={controls}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 0.3, type: "ease",delay:2 },
                  },
                }}>
                To be the part of CESTA, there are nominal charges of Rs 100.
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutUs;
