import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

export const Confetti: React.FC = () => {
  const [pieces, setPieces] = useState(200);
  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };

  useEffect(() => {
    stopConfetti();
  });

  return (
    <ReactConfetti
      width={window.innerWidth}
      height={window.innerHeight}
      numberOfPieces={pieces}
      gravity={0.2}
    />
  );
};
