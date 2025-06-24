import { Card, CardContent, Typography, List, ListItem, Box } from '@mui/material';

export const GameCard = ({ card }) => {
  const { guessWord, tabooWords} = card;

  return (
    <Card sx={{ width: "350px", height: "400px", borderRadius: "16px", backgroundColor: "#5ce1e6"}}>
      <CardContent >
        <Typography variant="h4" sx={{fontSize: "28px", fontFamily: "Archivo, sans-serif", fontWeight: 900 }}>{guessWord.toUpperCase()}</Typography>
        <Box sx={{ display: "flex", justifyContent: "center", borderRadius: "16px", backgroundColor: "#ffffff"}}>
<List>
          {tabooWords.map((word, i) => (
            <ListItem key={i}>
              <Typography sx={{ fontSize: "18px", fontFamily: "Poppins, sans-serif", fontWeight: 600}}>
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