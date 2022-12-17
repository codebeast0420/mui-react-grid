import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  howItWorksTips,
} from "./data";
import { styles } from "./styles";


const App = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [winWit, setWinWit] = useState(window.innerWidth);

  useEffect(() => {
    setWinWit(window.innerWidth);
    console.log(winWit);
  }, [window.innerWidth]);

  return (
    <section name="About" style={{ marginTop: '150px' }}>
      {/* How it works*/}
      <Container>
        {!isMobile && (
          <Grid
            container
            columnSpacing={0}
            rowSpacing={5}
            justifyContent="center"
          >
            {winWit <= 1200 && (
              <svg width="100%" height="300px" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute" }}>
                <defs>
                  <linearGradient id="e" x1="0" y1="0" x2="45" y2="10" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FCECB2" offset="0" />
                    <stop stop-color="#FF8B89" offset="0.25" />
                    <stop stop-color="#FC8ADC" offset="0.5" />
                    <stop stop-color="#7954FF" offset="0.75" />
                    <stop stop-color="#70BCFF" offset="1" />
                  </linearGradient>
                </defs>
                <line x1="88%" y1="80" x2="92%" y2="80" stroke="url(#e)" />
                <line x1="92%" y1="80" x2="92%" y2="210" stroke="url(#e)" />
                <line x1="92%" y1="210" x2="74%" y2="210" stroke="url(#e)" />
              </svg>
            )}
            {winWit > 1200 && (
              <svg width="100%" height="300px" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute" }}>
                <defs>
                  <linearGradient id="e1" x1={winWit/2 + 453} y1="80" x2={winWit/2 + 565} y2="80" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FCECB2" offset="0" />
                    <stop stop-color="#FF8B89" offset="0.25" />
                    <stop stop-color="#FC8ADC" offset="0.5" />
                    <stop stop-color="#7954FF" offset="0.75" />
                    <stop stop-color="#70BCFF" offset="1" />
                  </linearGradient>
                  <linearGradient id="e2" x1={winWit/2 + 565} y1="80" x2={winWit/2 + 565} y2="210" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FCECB2" offset="0" />
                    <stop stop-color="#FF8B89" offset="0.25" />
                    <stop stop-color="#FC8ADC" offset="0.5" />
                    <stop stop-color="#7954FF" offset="0.75" />
                    <stop stop-color="#70BCFF" offset="1" />
                  </linearGradient>
                  <linearGradient id="e3" x1={winWit/2 + 565} y1="210" x2={winWit/2 + 285} y2="210" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FCECB2" offset="0" />
                    <stop stop-color="#FF8B89" offset="0.25" />
                    <stop stop-color="#FC8ADC" offset="0.5" />
                    <stop stop-color="#7954FF" offset="0.75" />
                    <stop stop-color="#70BCFF" offset="1" />
                  </linearGradient>
                </defs>
                <line x1={winWit/2 + 453} y1="80" x2={winWit/2 + 565} y2="80" stroke="url(#e1)" />
                <line x1={winWit/2 + 565} y1="80" x2={winWit/2 + 565} y2="210" stroke="url(#e2)" />
                <line x1={winWit/2 + 565} y1="210" x2={winWit/2 + 285} y2="210" stroke="url(#e3)" />
              </svg>
            )}
            {howItWorksTips.map((benefit, index) => {
              return (
                <>
                  <Grid item xs={6} md={3} key={index}>
                    <Box
                      sx={{
                        p: "1px",
                        borderRadius: "4rem",
                        background:
                          "linear-gradient(144.94deg, #FCECB2 10.14%, #FF8B89 30.97%, #FC8ADC 51.8%, #7954FF 70.54%, #70BCFF 90.12%)",
                      }}
                    >
                      <Paper
                        elevation={0}
                        sx={styles.howitworksPaper}
                      >
                        <Typography variant="body1" sx={{ fontSize: "18px" }}>
                          {benefit}
                        </Typography>
                      </Paper>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={0.5}>
                    {index !== 2 && index !== 4 && (<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="e" x1="0" y1="10" x2="10" y2="10" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#FCECB2" offset="0" />
                          <stop stop-color="#70BCFF" offset="0.25" />
                          <stop stop-color="#70BCFF" offset="0.5" />
                          <stop stop-color="#70BCFF" offset="0.75" />
                          <stop stop-color="#70BCFF" offset="1" />
                        </linearGradient>
                      </defs>
                      <line x1="0" y1="10" x2="10" y2="10" stroke="url(#e)" />
                    </svg>)}
                    {/* {index === 2 && index !== 4 && (
                      <svg width="100%" height="150px" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="e" x1="0" y1="10" x2="10" y2="10" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FCECB2" offset="0" />
                            <stop stop-color="#FF8B89" offset="0.25" />
                            <stop stop-color="#FC8ADC" offset="0.5" />
                            <stop stop-color="#7954FF" offset="0.75" />
                            <stop stop-color="#70BCFF" offset="1" />
                          </linearGradient>
                        </defs>
                        <line x1="0" y1="45" x2="45" y2="45" stroke="url(#e)" />
                        <line x1="45" y1="45" x2="45" y2="150" stroke="url(#e)" />
                      </svg>
                    )}
                    {index === 4 && (
                      <svg width="400px" height="150px" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="e" x1="0" y1="10" x2="10" y2="10" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FCECB2" offset="0" />
                            <stop stop-color="#FF8B89" offset="0.25" />
                            <stop stop-color="#FC8ADC" offset="0.5" />
                            <stop stop-color="#7954FF" offset="0.75" />
                            <stop stop-color="#70BCFF" offset="1" />
                          </linearGradient>
                        </defs>
                        <line x1="0" y1="45" x2="237" y2="45" stroke="url(#e)" />
                        <line x1="237" y1="0" x2="237" y2="45" stroke="url(#e)" />
                      </svg>
                    )} */}
                  </Grid>
                </>
              );
            })}
          </Grid>
        )}
        {isMobile && (
          <Grid
            container
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            {howItWorksTips.map((benefit, index) => (
              <>
                <Grid item xs={6} style={{ width: '100%' }} key={index}>
                  <Box
                    sx={{
                      p: "1px",
                      borderRadius: "4rem",
                      background:
                        "linear-gradient(144.94deg, #FCECB2 10.14%, #FF8B89 30.97%, #FC8ADC 51.8%, #7954FF 70.54%, #70BCFF 90.12%)",
                    }}
                  >
                    <Paper
                      elevation={0}
                      sx={styles.howitworksPaper}
                    >
                      <Typography variant="body1" sx={{ fontSize: "18px" }}>
                        {benefit}
                      </Typography>
                    </Paper>
                  </Box>
                </Grid>
                {index !== 4 && (<svg viewBox="0 0 10 50" width="10px" height="50px" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="e" x1="0" y1="0" x2="0" y2="50" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FCECB2" offset="0" />
                      <stop stop-color="#70BCFF" offset="0.25" />
                      <stop stop-color="#70BCFF" offset="0.5" />
                      <stop stop-color="#70BCFF" offset="0.75" />
                      <stop stop-color="#70BCFF" offset="1" />
                    </linearGradient>
                  </defs>
                  <line x1="5" y1="0" x2="5" y2="50" stroke="url(#e)" />
                </svg>)}
              </>
            ))}
          </Grid>
        )}
      </Container>
    </section >
  );
};

export default App;
