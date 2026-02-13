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
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 drop-shadow-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0, scale: [1, 1.02, 1] }}
                transition={{
                  opacity: { delay: 0.4 },
                  y: { delay: 0.4 },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                Dear Osho Eniola Peace,
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-gray-800 font-medium leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                ...delicate as lace, elegant as a fine home,
                <br />
                tough as polished steel and
                <br />
                <span className="text-red-600 font-bold">
                  LOVE OF ALL MY LIVES
                </span>
              </motion.p>

              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Will you be my Valentine?{" "}
                <span className="text-red-600">♥</span>
              </motion.h2>
            </motion.div>
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
