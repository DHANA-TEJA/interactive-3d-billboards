import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useState } from "react";

export default function UserForm({ onNext }) {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (formData) => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          feedback: formData.feedback,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Form submitted successfully!");
        reset(); // Clear form
        onNext(); // Move to next step (if required by parent)
      } else {
        setMessage("❌ Error: " + (data.error || "Something went wrong."));
      }
    } catch (error) {
      setMessage("❌ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="bg-white/10 p-8 rounded-xl shadow-lg w-full max-w-md"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Enter Your Info</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("name", { required: true })}
          placeholder="Name"
          className="w-full p-3 rounded bg-white/20"
          required
        />
        <input
          {...register("email", { required: true })}
          placeholder="Email"
          type="email"
          className="w-full p-3 rounded bg-white/20"
          required
        />
        <input
          {...register("company")}
          placeholder="Company/Brand"
          className="w-full p-3 rounded bg-white/20"
        />
        <textarea
          {...register("feedback")}
          placeholder="Feedback"
          className="w-full p-3 rounded bg-white/20"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          disabled={loading}
          className="w-full bg-pink-600 p-3 rounded-lg text-white font-semibold"
        >
          {loading ? "Submitting..." : "Submit ✅"}
        </motion.button>
      </form>

      {message && (
        <p className="text-center mt-4 text-white">
          {message}
        </p>
      )}
    </motion.div>
  );
}
