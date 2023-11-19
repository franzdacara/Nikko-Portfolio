import "./Navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "../Sidebar/Sidebar"

const App = () => {
  return (
    <div className="navbar">
        {/* Side Bar */}
        <Sidebar/>
        
        <div className="wrapper">
             
            <motion.span
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
            >Nikko Dev</motion.span>
            <div className="social">
                <a href="https://www.facebook.com/franz.dacara/"><img src="./facebook.png" alt="facebook-icon" /></a>
                <a href="https://www.instagram.com/nikkodacara/"><img src="./instagram.png" alt="instagram-icon" /></a>
                <a href="https://www.youtube.com/channel/UCOKJemhJtRk3d83X7Fa3IRQ"><img src="./youtube.png" alt="youtube-icon" /></a>
                <a href="https://ph.linkedin.com/in/nikkodacara"><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="Linked-in" /></a>
            </div>
        </div>
    </div>
    )
};

export default App; 
