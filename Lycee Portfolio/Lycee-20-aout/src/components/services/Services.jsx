import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          مسارات مضيئة
          <br />
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img
            src="https://scontent.frak1-1.fna.fbcdn.net/v/t39.30808-6/311860975_100883949503083_6051898859928152251_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=NJ1C8OxBrUMAX8VkMU3&_nc_ht=scontent.frak1-1.fna&oh=00_AfDIh_EP7bOmzABsAjmy5yFgbRn_bC6cOToR1Bdj4k6cwQ&oe=65B33D1A"
            alt=""
          />
          <h1>
            <motion.b whileHover={{ color: "orange" }}> أفكار </motion.b> فريدة
            من نوعها
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>من اجل</motion.b> اطفالك
          </h1>
          <button>من نحن؟</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>محمد علي الكرش</h2>
          <p>
            عندما تتحدث عن المؤسسة الثانوية عشرين غشت ، فإن أدوار المدير والمعلم
            والطالب تأخذ أهمية كبيرة في تسيير ونجاح هذا الفضاء التعليمي المميز
          </p>
          <button>ثانوية 20 غشت</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>التعليم</h2>
          <p>
            يعتبر المدير المسؤول الرئيسي عن إدارة المؤسسة، حيث يتولى مهام تنظيم
            الجدول الزمني وتحديد الاحتياجات المالية وتوجيه السياسات التعليمية.
          </p>
          <button>ثانوية 20 غشت</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>بيئة مشتركة</h2>
          <p>
            تعتبر المؤسسة الثانوية بيئة مشتركة يتعاون فيها المدير والمعلم
            والطالب لضمان تجربة تعليمية ناجحة ومثمرة.
          </p>
          <button>ثانوية 20 غشت</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>العمل الاجتماعي</h2>
          <p>
            إن الدور المنسجم بين هؤلاء الفاعلين الرئيسيين يساهم في تحقيق أهداف
            المؤسسة وتطوير مستقبل الطلاب.
          </p>
          <button>ثانوية 20 غشت</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
