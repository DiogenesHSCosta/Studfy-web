import React from 'react'
import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import './Carrosel.css'

const Carrosel = () => {
    const carrosel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() =>{
        setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth+10)
    }, [])

  return (
    <motion.div ref={carrosel} className='carrosel' whileTap={{cursor: "grabing"}}>
        <motion.div className='carrosel-content' 
                    drag='x'
                    dragConstraints={{right :0, left: (-width-100)}}>

            <motion.div className='carrosel-item'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, qui nam beatae voluptatem sit dolores assumenda laboriosam blanditiis libero, exercitationem enim. Saepe ex assumenda fugit dicta illum rem quidem accusamus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro blanditiis aliquam rerum! Omnis cumque, debitis quae sit quas vitae eos quos perspiciatis dolorum dolor praesentium. Dolorum iste reprehenderit quam. Facere.</p>
                <p>Nome da pessoa</p>
            </motion.div>

            <motion.div className='carrosel-item'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, qui nam beatae voluptatem sit dolores assumenda laboriosam blanditiis libero, exercitationem enim. Saepe ex assumenda fugit dicta illum rem quidem accusamus.</p>
                <p>Nome da pessoa</p>
            </motion.div>

            <motion.div className='carrosel-item'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, qui nam beatae voluptatem sit dolores assumenda laboriosam blanditiis libero, exercitationem enim. Saepe ex assumenda fugit dicta illum rem quidem accusamus.</p>
                <p>Nome da pessoa</p>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Carrosel