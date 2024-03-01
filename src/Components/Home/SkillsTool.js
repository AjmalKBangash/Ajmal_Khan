import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SkillsTool(props) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ x: "0%" });
    }
  }, [controls, inView]);
  return (
    <div ref={ref}>
      <div className="skillful-tools-name-per">
        <span>{props.data?.skill}</span>
        <span>{props.data?.per}%</span>
      </div>
      <div className="skillful-tools-grey">
        <motion.div
          initial={{ x: "-100%" }}
          //   animate={{ x: "0%" }}
          animate={controls}
          transition={{ duration: 5 }}
          className="skillful-tools-orange"
          style={{ width: `${props.data?.per}%` }}
        ></motion.div>
      </div>
    </div>
  );
}

export default SkillsTool;
