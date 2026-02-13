import { useState } from "react";
import { motion } from "framer-motion";
import HeartBackground from "./HeartBackground";
import YesButton from "./YesButton";
import NoButton from "./NoButton";
import SuccessScreen from "./SuccessScreen";

const ValentineCard = () => {
  const [noClickCount, setNoClickCount] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);

  const handleNoClick = () => {
    setNoClickCount((prev) => prev + 1);
  };

  const handleYesClick = () => {
    setYesClicked(true);
  };

  if (yesClicked) {
    return <SuccessScreen />;
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-valentine-pink-light via-valentine-pink to-valentine-rose p-4 overflow-hidden">
      <HeartBackground />

      <motion.div
        className="relative z-10 w-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        <div className="p-8">
          {/* Question Text */}
          <motion.div
            className="text-center space-y-12 mb-20"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 drop-shadow-lg"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Will you be my Valentine?
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-800 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I promise to bring you joy and happiness! 💝
            </motion.p>
          </motion.div>

          {/* Buttons Container */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <YesButton onClick={handleYesClick} noClickCount={noClickCount} />
            <NoButton onClick={handleNoClick} noClickCount={noClickCount} />
          </motion.div>

          {/* Hint text after some clicks */}
          {noClickCount >= 2 && (
            <motion.p
              className="text-center mt-8 text-gray-700 text-sm sm:text-base font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {noClickCount === 2 && "The Yes button is growing... 👀"}
              {noClickCount === 3 && "It's getting bigger! Maybe that's a sign? 💭"}
              {noClickCount >= 4 && "Try to click No again... I dare you! 😏"}
            </motion.p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ValentineCard;
