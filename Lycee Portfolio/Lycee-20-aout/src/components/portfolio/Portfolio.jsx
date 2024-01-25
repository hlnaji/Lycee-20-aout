import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "محمد علي الكرش",
    img: "https://res.cloudinary.com/dlhbc051y/image/upload/v1705961129/lycee/qlrakinemjgw9stmdik6.png",
    desc: " عندما نتحدث عن نجاح أي مؤسسة تعليمية عشرين غشت، فإنه من الضروري أن نقف ونقدم الشكر العميق للشخص الذي يقف وراء هذا النجاح. في حياتنا المدرسية، هناك مدير للمؤسسة يبذل قصارى جهده لضمان سير الأمور بسلاسة    وتحقيق الأهداف التعليمية والتربوية المحددة. وتحتاج هذه الكلمات للشكر    لتعكس مدى تقديرنا وامتناننا لمديرنا الاستاذ.",
  },
  {
    id: 2,
    title: " تلاميذنا ",
    img: "https://lh3.googleusercontent.com/p/AF1QipNpGkvu87BBva4JOEme_diryBORciEkoNTU6Qrs=s1360-w1360-h1020",
    desc: "نحن نقدر التلاميذ الذين يشاركون في العمل الاجتماعي ويسعون للمساهمة في رفاهية مجتمعاتهم. سواء كانوا يطوعون في مشاريع خيرية أو يشاركون في برامج المساعدة النفسية لزملائهم أو يسعون لتحقيق التغيير الاجتماعي في مجالات معينة، فإن تلاميذنا يدركون أهمية خدمة المجتمع والعمل الجماعي لصالح الجميع.    ",
  },
  {
    id: 3,
    title: " التحديات ",
    img: "https://scontent.frak1-2.fna.fbcdn.net/v/t39.30808-6/311769012_100885156169629_5122074735758540655_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=783fdb&_nc_ohc=rUtybix7ZtsAX9l54QT&_nc_ht=scontent.frak1-2.fna&oh=00_AfBtF_8DNJP3XbUX1HENTLbwtMPvky5ezqXnC2FPV_7-5g&oe=65B39B60",
    desc: "نحن نرغب في أن نعبر عن امتناننا العميق لتلاميذنا الذين يعملون باجتهاد ويسعون لتحقيق أفضل ما لديهم. فهم يعكسون قيم المؤسسة ويبذلون الجهد ليكونوا قدوة لغيرهم. نحن نشهد بكل فخر التزامهم بالتعلم وتطوير مهاراتهم، ومدى استعدادهم لمواجهة التحديات والتغييرات في عالم سريع التطور.    ",
  },
  {
    id: 4,
    title: "  أهداف المؤسسة",
    img: "https://scontent.frak1-1.fna.fbcdn.net/v/t39.30808-6/377541935_265358909719560_6209762766368925498_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=o91cJhTRPy4AX93yqV-&_nc_ht=scontent.frak1-1.fna&oh=00_AfAIu2IOznQWmmTgyI0KD7ariLyuZ_bwS2OgU2CTaakp3w&oe=65B2F6F0",
    desc: " تعتبر المؤسسة الثانوية بيئة مشتركة يتعاون فيها المدير والمعلم والطالب لضمان تجربة تعليمية ناجحة ومثمرة. إن الدور المنسجم بين هؤلاء الفاعلين الرئيسيين يساهم في تحقيق أهداف المؤسسة وتطوير مستقبل الطلاب.",
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
            <button>ثانوية 20 غشت</button>
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
