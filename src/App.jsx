import tabooLogo from '/taboo.svg'
import './App.css'
import { Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { cardBank } from "./constants";
import { GameCard } from './GameCard';
import ScoreBoard from './ScoreBoard';
import Controls from "./Controls";
import { PrimaryButton } from "./PrimaryButton";
import { Marquee } from "./Marquee";
import { pxToRemConverter } from './utils/numericHelpers';
// import { pxToRemConverter } from './utils/numericHelpers';

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
    <Box sx={{ color: "#ffffff", fontFamily: "Poppins, sans-serif",
      minHeight: '100vh',
      display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
     }}>
      <Marquee />
      <Box sx={{ marginTop: pxToRemConverter(32)}}>
<Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: hasStarted && currentIndex < cards.length ? pxToRemConverter(0) : pxToRemConverter(200),
    marginBottom: hasStarted && currentIndex < cards.length ? 2 : 4,
  }}
>
  <Box
    component="img"
    src={tabooLogo}
    alt="Logo"
    sx={{
      height: hasStarted && currentIndex < cards.length ? 140 : 160,
      transition: 'all 0.3s ease',
      marginBottom: pxToRemConverter(16)
    }}
  />
</Box>
       {!hasStarted ? (
    <Box textAlign="center">
      <Box sx={{ marginBottom: pxToRemConverter(16)}}>
              <Typography variant="h4" gutterBottom sx={{ fontFamily: "Archivo, sans-serif"}}>
        WELCOME
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ fontFamily: "Poppins, sans-serif"}}>
        Get through all 32 cards before time runs out!
      </Typography>
        </Box>

      <PrimaryButton
        variant="contained"
        onClick={handleStart}
        sx={{ marginTop: pxToRemConverter(16) }}
        label={"Play"}
        buttonColor={"#fff7ad"}
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
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 1}} mt={4} >
      <Typography variant="h4" sx={{ fontFamily: "Archivo, sans-serif"}}>🎉 HAPPY BIRTHDAY SUNNY! 🎉</Typography>
      <Box sx={{display: "flex", flexDirection: "row", gap: 1, alignItems: "center"}}>
        <Typography  sx={{ fontFamily: "Poppins, sans-serif"}}>{`Your final score:`}</Typography><Typography variant="h6" sx={{ fontFamily: "Archivo, sans-serif"}}>{score}/32</Typography>
        </Box>
      <PrimaryButton variant="contained" onClick={handleShuffle} sx={{ mt: 2 }} label={"Play Again"} buttonColor={"#fff7ad"} />
    </Box>
  )}

      </Box>

    </Box>
  )
}

export default App
