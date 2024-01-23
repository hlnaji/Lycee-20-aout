import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Lycee 20 Aout",
    img: "https://scontent.frak1-1.fna.fbcdn.net/v/t39.30808-6/311860975_100883949503083_6051898859928152251_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=NJ1C8OxBrUMAX8VkMU3&_nc_ht=scontent.frak1-1.fna&oh=00_AfDIh_EP7bOmzABsAjmy5yFgbRn_bC6cOToR1Bdj4k6cwQ&oe=65B33D1A",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 2,
    title: "Lycee 20 Aout",
    img: "https://lh3.googleusercontent.com/p/AF1QipNpGkvu87BBva4JOEme_diryBORciEkoNTU6Qrs=s1360-w1360-h1020",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 3,
    title: "Lycee 20 Aout",
    img: "https://scontent.frak1-2.fna.fbcdn.net/v/t39.30808-6/311769012_100885156169629_5122074735758540655_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=783fdb&_nc_ohc=rUtybix7ZtsAX9l54QT&_nc_ht=scontent.frak1-2.fna&oh=00_AfBtF_8DNJP3XbUX1HENTLbwtMPvky5ezqXnC2FPV_7-5g&oe=65B39B60",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 4,
    title: "Lycee 20 Aout",
    img: "https://scontent.frak1-1.fna.fbcdn.net/v/t39.30808-6/377541935_265358909719560_6209762766368925498_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=o91cJhTRPy4AX93yqV-&_nc_ht=scontent.frak1-1.fna&oh=00_AfAIu2IOznQWmmTgyI0KD7ariLyuZ_bwS2OgU2CTaakp3w&oe=65B2F6F0",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Lycee 20 Aout</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>أعمالنا وأهدافنا</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
