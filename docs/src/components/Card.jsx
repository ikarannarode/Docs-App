import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from 'framer-motion';


function Card({ data, reference }) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.1 }} dragElastic={0.1} dragTransition={{ bounceStiffness: 600, bounceDamping: 30 }} className="relative w-60 h-72 flex-shrink-0 rounded-[45px] text-white bg-zinc-900 px-8 py-10 overflow-hidden">
            <FaRegFileAlt />
            <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p>
            <div className="footer absolute bottom-0  w-full left-0">
                <div className='flex items-center justify-between px-8 py-3 mb-3'>
                    <h5>{data.fileSize}</h5>
                    <span className='w-5 h-5 bg-zinc-600 rounded-full items-center flex justify-center'>
                        {data.close ? <LuDownload size=".7em" color='#fff' /> : <IoIosClose size=".7em" color='#fff' />}

                    </span>
                </div>
                {
                    data.tag.isOpen && <div className={`tag w-full py-4 ${data.tag.color === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center  justify-center `}>
                        <h3 className='text-sm font-semibold '>{data.tag.tagTitle}</h3>
                    </div>
                }
            </div>

        </motion.div>
    )
}

export default Card