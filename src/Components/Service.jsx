import service01 from "../assets/service01.svg";
import service02 from "../assets/service02.svg";
import service03 from "../assets/service03.svg";
import service04 from "../assets/service04.svg";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Service() {
  const services = [
    {
      id: "service01",
      image: service01,
      title: "super quality food",
      description: "A team of dreamers and doers building unique interactive music and art",
    },
    {
      id: "service02",
      image: service02,
      title: "original recipes",
      description: "A team of dreamers and doers building unique interactive music and art",
    },
    {
      id: "service03",
      image: service03,
      title: "quick fast delivery",
      description: "A team of dreamers and doers building unique interactive music and art",
    },
    {
      id: "service04",
      image: service04,
      title: "100% fresh foods",
      description: "A team of dreamers and doers building unique interactive music and art",
    },
  ];

  return (
    <div className="container">
      <section className="service-section">
        <motion.div
          className="service-row-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service) => (
            <motion.div
              variants={itemVariants}
              className="service-row"
              key={service.id}
            >
              <img src={service.image} alt={service.title} />
              <h3 className="heading03">{service.title}</h3>
              <p className="para28">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
