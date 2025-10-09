import { motion } from "framer-motion";
import Lottie from "lottie-react";
import fanAnim from "../assets/fan.json";
import bulbAnim from "../assets/bulb.json";
import soundAnim from "../assets/sound.json";

export default function Interaction({ onNext }) {
  return (
    <div className="grid gap-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Choose an Action</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 p-4 rounded-xl shadow">
          <Lottie animationData={fanAnim} className="h-40" />
          <button className="mt-3 bg-blue-600 px-4 py-2 rounded-lg">Spin Fan</button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 p-4 rounded-xl shadow">
          <Lottie animationData={bulbAnim} className="h-40" />
          <button className="mt-3 bg-yellow-600 px-4 py-2 rounded-lg">Turn On Light</button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 p-4 rounded-xl shadow">
          <Lottie animationData={soundAnim} className="h-40" />
          <button className="mt-3 bg-green-600 px-4 py-2 rounded-lg">Play Sound</button>
        </motion.div>
      </div>

      <motion.button
        onClick={onNext}
        className="mt-8 bg-pink-600 px-6 py-3 rounded-xl"
        whileHover={{ scale: 1.1 }}
      >
        Continue ➡️
      </motion.button>
    </div>
  );
}
