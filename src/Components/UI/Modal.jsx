import { useEffect, useRef } from "react"
import { createPortal } from "react-dom";
import {motion} from "framer-motion"

export default function Modal({children, open, className= " "}){
const dialog= useRef();

useEffect(()=>{
    const modal = dialog.current;
    if(open){
        modal.showModal();
    }

    return () => modal.close();
}, [open]);

    return createPortal( <motion.dialog
        initial={{opacity:0 , y:30}} 
        animate={{opacity:1, y:0}}
        exit={{opacity:0, y:30}}
         ref={dialog} 
         className={`modal ${className}`}>{children}
         </motion.dialog>, document.getElementById("modal")
    )
}