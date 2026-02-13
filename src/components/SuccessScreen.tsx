import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import Confetti from "react-confetti";
import { Button } from "./ui/button";

const SuccessScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-valentine-pink-light via-valentine-pink to-valentine-rose"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Professional Confetti */}
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={true}
        numberOfPieces={200}
        gravity={0.3}
      />

      {/* Success Message */}
      <motion.div
        className="text-center z-10 space-y-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: 0.2,
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart
            size={120}
            className="mx-auto text-red-600"
            fill="currentColor"
          />
        </motion.div>

        <motion.h1
          className="text-6xl font-bold text-gray-900 drop-shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Your Valentine's Gift is on its way!💕
        </motion.h1>

        {/* <motion.p
          className="text-2xl text-red-600 font-medium"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          The countdown to your special surprise has begun...
        </motion.p> */}

        <motion.div
          className="flex items-center justify-center text-gray-700"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Sparkles size={20} className="text-red-600" />
          <span className="text-lg max-w-[400px] text-red-600">
            Here’s to making your day special and cherishing the moments we
            share together!
          </span>
          <Sparkles size={20} className="text-red-600" />
        </motion.div>

        <Button onClick={() => window.location.reload()}>Go Back</Button>
      </motion.div>
    </motion.div>
  );
};

export default SuccessScreen;
