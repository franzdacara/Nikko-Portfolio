import { useEffect, useState } from 'react'
import "./Cursor.scss"
import {motion} from "framer-motion"

const Cursor = () => {

    const [position, setPosition ] = useState({x:10, y:10})

    useEffect(() =>{
        const mouseMove = (e) => {
            setPosition({x:e.clientX, y:e.clientY})
        }

        window.addEventListener("mousemove", mouseMove)

        return () =>{
            window.addEventListener("mousemove", mouseMove)
        }
    }, []);

    console.log(position)

    return (
        <motion.div 
            className='cursor' 
            animate={{x:position.x-20, y:position.y-20}}
        >
        </motion.div>
    )
}


export default Cursor