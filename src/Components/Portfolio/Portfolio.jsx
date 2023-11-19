import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import PropTypes from "prop-types";
import "./Portfolio.scss";

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-1000, 1000]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt={`${item.title} Portfolio`} />
          </div>
          <motion.div className="textContainer" style={{ y: y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              See Demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

Single.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const items = [
    {
      id: 1,
      title: "Personal Website Client",
      img: "./Porjects/Personal.png",
      desc: "A personal portfolio website showcasing my skills, projects, and achievements. Explore my work and learn more about me.",
      link: "https://franzdacara.github.io/Franz-Nikko/",
    },
    {
      id: 2,
      title: "Drone Marketing Agency Client",
      img: "./Porjects/DroneMarketing.png",
      desc: "A responsive website for a drone marketing agency, highlighting their services, portfolio, and contact information. Boost your business with aerial photography and videography.",
      link: "http://www.dronemarketingagency.com/",
    },
    {
      id: 3,
      title: "Jeff Spicer Agency Client",
      img: "./Porjects/Spicer.png",
      desc: "The official website for Jeff Spicer's global solutions agency. Discover our comprehensive services, expertise, and success stories. Partner with us for innovative solutions.",
      link: "http://spicerglobalsolutions.com/",
    },
    {
      id: 4,
      title: "Virtual Assistant Pairing Agency Website",
      img: "./Porjects/VirtualAssistanPairingIMG.png",
      desc: "Connecting businesses with skilled virtual assistants. Our platform streamlines the process of finding the perfect virtual assistant to support your tasks and projects. Get started today!",
      link: "https://virtualassistantpairing.com/",
    },
  ];

  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX: scaleX }} className="progress-bar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
