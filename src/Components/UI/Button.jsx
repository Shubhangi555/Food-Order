import { motion } from "framer-motion";

export default function Button({children, textOnly, className, ...props}){
    let cssClasses = textOnly ? "text-button" : "button";
    cssClasses += " " + className;
    return <motion.button 
    whileHover={{scale:1.1}}
    transition={{type:"spring", stiffness:500}}
     className={cssClasses} {...props}>{children}</motion.button>
}