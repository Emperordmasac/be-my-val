import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRandomPosition } from "@/hooks/useRandomPosition";

interface NoButtonProps {
  onClick: () => void;
  noClickCount: number;
}

const NO_BUTTON_TEXTS = [
  "No",
  "Are you sure?",
  "Really?",
  "Think again!",
  "Last chance!",
];

const NoButton = ({ onClick, noClickCount }: NoButtonProps) => {
  const { position, generateRandomPosition } = useRandomPosition();
  const shouldMove = noClickCount >= 4;

  // Get current text based on click count
  const currentText =
    NO_BUTTON_TEXTS[Math.min(noClickCount, NO_BUTTON_TEXTS.length - 1)];

  const handleInteraction = () => {
    if (shouldMove) {
      generateRandomPosition();
    }
  };

  return (
    <motion.div
      style={{
        position: shouldMove ? "fixed" : "relative",
      }}
      animate={
        shouldMove
          ? {
              left: position.x,
              top: position.y,
            }
          : {}
      }
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 25,
      }}
      onHoverStart={handleInteraction}
      onTouchStart={handleInteraction}
    >
      <Button
        onClick={onClick}
        size="lg"
        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
        aria-label="No, decline the valentine request"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={currentText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {currentText}
          </motion.span>
        </AnimatePresence>
      </Button>
    </motion.div>
  );
};

export default NoButton;
