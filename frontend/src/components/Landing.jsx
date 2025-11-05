import { motion } from "framer-motion";

export default function Landing({ onNext }) {
  return (
    <motion.div
      className="text-center p-6"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold mb-4">✨ Control This Billboard ✨</h1>
      <p className="text-lg mb-6">Scan. Click. Experience Live Interaction.</p>
      <motion.button
        onClick={onNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-pink-600 px-6 py-3 rounded-xl shadow-lg text-lg font-semibold"
      >
        Start 🚀
      </motion.button>
    </motion.div>
  );
}
