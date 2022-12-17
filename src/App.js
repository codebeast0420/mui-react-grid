import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import {
  howItWorksTips,
} from "./data";
import { styles } from "./styles";


const App = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  useEffect(() => {
    console.log(isMobile);
  }, [isMobile]);

  return (
    <section name="About" style={{ marginTop: '150px' }}>
      <div>{isMobile}</div>
      {/* How it works*/}
      <Container>
        {!isMobile && (
          <Grid
            container
            columnSpacing={0}
            // rowSpacing={5}
            justifyContent="center"
          >
            {howItWorksTips.map((benefit, index) => {
              return (
                <>
                  <Grid item xs={6} md={3.5} key={index}>
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
                        sx={{
                          p: 3,
                          m: 0.3,
                          textAlign: "center",
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                          borderRadius: "4rem",
                          height: "30px",
                          backgroundColor: "#1E1E1E",
                          color: "white"
                        }}
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
                    {index === 2 && index !== 4 && (
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
                    )}
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
                <Grid item xs={6} key={index}>
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
                      sx={{
                        p: 3,
                        m: 0.3,
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        borderRadius: "4rem",
                        height: "30px",
                        backgroundColor: "#1E1E1E",
                        color: "white"
                      }}
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
