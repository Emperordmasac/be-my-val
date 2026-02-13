import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const HeartBackground = () => {
  // Various heart colors
  const heartColors = [
    'text-pink-400',
    'text-pink-500',
    'text-red-400',
    'text-red-500',
    'text-rose-400',
    'text-rose-500',
    'text-purple-400',
    'text-fuchsia-400',
  ];

  // Generate random hearts with different sizes, positions, and colors
  const [hearts] = useState(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      size: Math.random() * 30 + 20, // 20-50px
      left: Math.random() * 100, // 0-100%
      top: Math.random() * 100, // 0-100%
      delay: Math.random() * 2, // 0-2s delay
      duration: Math.random() * 3 + 4, // 4-7s duration
      color: heartColors[Math.floor(Math.random() * heartColors.length)],
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className={`absolute ${heart.color} opacity-20`}
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}%`,
            fontSize: `${heart.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
};

export default HeartBackground;
