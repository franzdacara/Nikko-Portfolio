import  './Nikko.scss'
import {motion} from "framer-motion"

const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChilder: 0.1,
    } 
  },
  scrollButton: {
    opacity: 0,
    y: 10,
      transition: {
        duration: 1,
        repeat: Infinity
      }
  }
};

const SliderVariants = {
  initial: {
    x: -0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeatType: "mirror",
      repeat: Infinity,
    } 
  },

}

const Nikko = () => {
  return (
    <div className='nikko'>
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial = "initial" animate = "animate">
          <motion.h2 variants={textVariants}>FRANZ NIKKO DACARA</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer  and Software Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.a href="#Portfolio" variants={textVariants}>See the Latest Works</motion.a>
            <motion.a href="#Contact" variants={textVariants}>Contact Me</motion.a>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </div>

      <motion.div className="slidingTextContainer" variants={SliderVariants} initial="initial" animate ="animate">
        Web Designer / Web Developer / Software Developer
      </motion.div>

      <img className='imgContainer'
        src="./NikkoProfs.png" alt="NikkoProfile" 
      />
    </div>
  )
}

export default Nikko;