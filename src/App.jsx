import tabooLogo from '/taboo.svg'
import './App.css'
import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { cardBank } from "./constants";
import { GameCard } from './GameCard';
import ScoreBoard from './ScoreBoard';
import Controls from "./Controls";
import { PrimaryButton } from "./PrimaryButton";

function App() {
  const [cards, setCards] = useState(cardBank);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
  if (!isRunning) return;

  const interval = setInterval(() => {
    setTimer(prev => {
      if (prev === 1) {
        setIsRunning(false); // stop when timer hits 0
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(interval);
}, [isRunning]);

const handleStart = () => {
  setHasStarted(true);
};

const handleNext = () => {
  if (timer > 0) {
    setScore(prev => prev + 1);
  }

  /*
  if (currentIndex < cards.length - 1) {
    setCurrentIndex(prev => prev + 1);
  } else {
    setCurrentIndex(0); // loop around or end game
  }

  setTimer(60);
  setIsRunning(true);*/
  setCurrentIndex(prev => prev + 1);
  setTimer(60);
  setIsRunning(true);


};

const handleShuffle = () => {
  const shuffled = [...cardBank].sort(() => Math.random() - 0.5);
  setCards(shuffled);
  setCurrentIndex(0);
  setScore(0);
  setTimer(60);
  setIsRunning(true);
};

  return (
    <Box sx={{padding: 16, color: "#ffffff", fontFamily: "Poppins, sans-serif" }}>
      <Box component="img" src={tabooLogo} alt="Logo" sx={{ height: 150 }} />

       {!hasStarted ? (
    <Box textAlign="center" mt={4}>
      <Typography variant="h4" gutterBottom>
        🎉 Welcome to Taboo: Sunny Edition!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Try to get through all 32 cards before time runs out.
      </Typography>
      <PrimaryButton
        variant="contained"
        onClick={handleStart}
        sx={{ mt: 2 }}
        label={"Play"}
      />
    </Box>
  ) : currentIndex < cards.length ? (
    <Box>
      <ScoreBoard timer={timer} score={score} index={currentIndex + 1} />

      {cards[currentIndex] && <GameCard card={cards[currentIndex]} />}
      {
        /*
              <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
        Card {currentIndex + 1} of {cards.length}
      </Typography>

        */
      }
      <Controls onNext={handleNext} onShuffle={handleShuffle} />

    </Box>
  ) : (
    <Box textAlign="center" mt={4}>
      <Typography variant="h4">🎉 Happy Birthday Sunny!</Typography>
      <Typography variant="h6">Your final score: {score}</Typography>
      <PrimaryButton variant="contained" onClick={handleShuffle} sx={{ mt: 2 }} label={"Play Again"} />
    </Box>
  )}
    </Box>
  )
}

export default App
