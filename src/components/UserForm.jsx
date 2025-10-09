import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

export default function UserForm({ onNext }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = () => onNext();

  return (
    <motion.div
      className="bg-white/10 p-8 rounded-xl shadow-lg w-full max-w-md"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Enter Your Info</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("name")} placeholder="Name" className="w-full p-3 rounded bg-white/20" />
        <input {...register("email")} placeholder="Email" className="w-full p-3 rounded bg-white/20" />
        <input {...register("company")} placeholder="Company/Brand" className="w-full p-3 rounded bg-white/20" />
        <textarea {...register("feedback")} placeholder="Feedback" className="w-full p-3 rounded bg-white/20" />
        <motion.button whileHover={{ scale: 1.05 }} className="w-full bg-pink-600 p-3 rounded-lg">
          Submit ✅
        </motion.button>
      </form>
    </motion.div>
  );
}
