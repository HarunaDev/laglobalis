import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import images from "../assets/light-removebg-preview.png"

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        {/* <motion.img
  src={images}
  alt="light"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="w-24 md:w-42 mb-4 animate-pulse"
/> */}

      {/* Animated 404 number */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-7xl md:text-9xl font-bold text-[#D4AF37]"
      >
        404
      </motion.h1>

      {/* Animated message */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800"
      >
        Page Not Found
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-3 text-gray-500 max-w-md"
      >
        {/* The page you’re looking for doesn’t exist or has been moved. */}
        Let the Light guide you
      </motion.p>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
        className="mt-8 px-6 py-3 bg-[#D4AF37] text-white rounded-lg shadow-md"
      >
        Go Home
      </motion.button>
    </div>
  );
}