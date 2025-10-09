import { motion } from "framer-motion";
import Lottie from "lottie-react";
import confetti from "../assets/confetti.json";

export default function ThankYou() {
  return (
    <div className="text-center">
      <Lottie animationData={confetti} loop={false} className="h-56" />
      <motion.h2
        className="text-3xl font-bold mt-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        🎉 Thank You for Interacting! 🎉
      </motion.h2>
      <p className="mt-2">Your experience has been recorded.</p>
    </div>
  );
}
