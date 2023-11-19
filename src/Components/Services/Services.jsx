import "./Services.scss"
import {useRef} from "react"
import {motion} from "framer-motion"


const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate:{
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  }
}

export const Services = () => {

  const ref = useRef()

  // const isInView = useInView(ref, {margin: "-100px"})

  return (
    <motion.div 
      className="services" 
      variants={variants} 
      initial="initial" 
      // whileInView="animate"
      ref={ref}
      // animate = {isInView ? "animate" : "initial"}
      animate = {"animate"}
      > 
      <motion.div className="textContainer"  variants={variants} >
        <p>I focus on helping your brand grow <br/> and more forward</p>
        <hr/>
      </motion.div>
      <motion.div className="titleContainer"  variants={variants} >
        <div className="title">
          <img src="./people.webp" alt="people_image" />
          <h1> 
            <motion.b whileHover={{color: "orange"}}> Unique </motion.b> Ideas 
          </h1>
        </div>
        <div className="title">
          <h1> 
            <motion.b whileHover={{color: "orange"}}> For Your </motion.b> Business.
          </h1>
            <motion.a href="#Portfolio" whileHover={{ color: "black", backgroundColor: "white" }}>WHAT I DO?</motion.a>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
          <h2>Web Design</h2>
          <p>Create stunning websites with our expert web design services. Elevate your online presence and leave a lasting impression on your audience.</p>
          <a href="#Portfolio">GO</a>
        </motion.div>

        <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
          <h2>Mobile Development</h2>
          <p>Unlock the potential of mobile technology with our mobile development solutions. We turn your ideas into powerful and engaging mobile applications.</p>
          <a href="#Portfolio">GO</a>
        </motion.div>

        <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
          <h2>Software Development</h2>
          <p>Experience innovation through our software development services. We build robust and scalable software solutions tailored to your business needs.</p>
          <a href="#Portfolio">GO</a>
        </motion.div>

        <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}>
          <h2>Editing</h2>
          <p>Refine your content with our professional editing services. From video editing to content polishing, we ensure your message shines and captivates.</p>
          <a href="#Portfolio">GO</a>
        </motion.div>
      </motion.div>
    </motion.div>


  )
}


