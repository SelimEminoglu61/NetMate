import { motion } from "framer-motion";
import "../assets/scss/style.scss";

export default function LogoIntro({ onFinish }) {
  return (
    <motion.div
      className="motionDiv"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      onAnimationComplete={onFinish}
    >
      <motion.img
        src="./images/logo.png"
        className="motionLogo"
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
}
