import { Card, CardContent, Typography, List, ListItem, Box } from '@mui/material';
import { pxToRemConverter } from './utils/numericHelpers';

const backgroundColors = {
  1: ["#ffa9f9", "#fff7ad"],
  2: ["#5ce1e6", "#8c52ff"],
  3: ["#ff5757", "#ffde59"],
  4: [ "#fff7ad", "#0cc0df"],
}

export const GameCard = ({ card }) => {
  const { guessWord, tabooWords, difficulty} = card;

  return (
    <Card sx={{ width: "300px", height: "370px", borderRadius: "24px", background: `linear-gradient(180deg, ${backgroundColors[difficulty][0]}, ${backgroundColors[difficulty][1]})`, padding: "32px 24px", display: "flex", flexDirection: "column", margin: `${pxToRemConverter(32)} 0`  }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", flexGrow: 1, padding: 0}}>
        <Typography variant="h4" sx={{fontSize: "28px", fontFamily: "Archivo, sans-serif", fontWeight: 900, marginBottom: "24px", marginTop: "12px", textAlign: "center" }}>{guessWord.toUpperCase()}</Typography>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "24px", backgroundColor: "#ffffff", height: "100%", padding: 0, width: "100%"}}>
          <List>
          {tabooWords.map((word, i) => (
            <ListItem key={i} sx={{justifyContent: "center", textAlign: "center"}}>
              <Typography sx={{ fontSize: "18px", fontFamily: "Poppins, sans-serif", fontWeight: 600, textAlign: "center", width: "100%"}}>
              {word}
              </Typography>
              </ListItem>
          ))}
        </List>
        </Box>
      </CardContent>
    </Card>
  );
};