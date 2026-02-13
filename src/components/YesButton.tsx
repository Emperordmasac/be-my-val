import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface YesButtonProps {
  onClick: () => void;
  noClickCount: number;
}

const YesButton = ({ onClick, noClickCount }: YesButtonProps) => {
  // Scale grows 30% with each "No" click
  const scale = 1 + noClickCount * 0.3;

  return (
    <motion.div
      animate={{ scale }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <Button
        onClick={onClick}
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
        aria-label="Yes, I'll be your valentine"
      >
        <Heart className="mr-2" fill="currentColor" />
        Yes!
      </Button>
    </motion.div>
  );
};

export default YesButton;
