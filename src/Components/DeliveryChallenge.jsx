import { Link } from "react-router-dom";
import Button from "./UI/Button";
import deliveryman from "../assets/delivery-man-1.png"
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function DeliveryChallenge() {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, -150]);

    return (
        <section className="delivery-challenge-section" ref={targetRef}>
            <div className="container">
                <div className="main-cta">
                    <div className="cta-title">
                        <p className="para23">crispy, every bite taste</p>
                        <motion.h2 initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: false }} className="heading01">30 minutes fast <br /> delivery challenge</motion.h2>
                    </div>
                    <Link><Button>Order Now</Button> </Link>
                    <motion.div className="delivery-man" style={{ x }}>
                        <img src={deliveryman} />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}