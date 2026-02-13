import { useState, useCallback } from "react";

interface Position {
  x: number;
  y: number;
}

export const useRandomPosition = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const generateRandomPosition = useCallback(() => {
    // Button dimensions (approximate)
    const buttonWidth = 120;
    const buttonHeight = 48;
    const padding = 20;

    // Calculate safe bounds within viewport
    const maxX = window.innerWidth - buttonWidth - padding;
    const maxY = window.innerHeight - buttonHeight - padding;

    // Ensure minimum values are not negative
    const safeMaxX = Math.max(maxX, padding);
    const safeMaxY = Math.max(maxY, padding);

    // Generate random position within safe bounds
    const newX = Math.random() * safeMaxX + padding;
    const newY = Math.random() * safeMaxY + padding;

    setPosition({ x: newX, y: newY });
  }, []);

  return { position, generateRandomPosition };
};
