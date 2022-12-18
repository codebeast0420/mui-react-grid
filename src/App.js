import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import {
  howItWorksTips, 
  howItWorksTipsSM,
} from "./data";
import { styles } from "./styles";


const App = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
            <div style={styles.linkLine}></div>
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
                        sx={index !== 3 ? styles.howitworksPaper : styles.howitworksPaper3}
                      >
                        <Typography variant="body1" sx={{ fontSize: "18px" }}>
                          {benefit}
                        </Typography>
                      </Paper>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={0.5}>
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
            rowSpacing={4}
          >
            <div style={styles.linkLineSM}></div>
            {howItWorksTipsSM.map((benefit, index) => (
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
                      sx={index !== 4 ? styles.howitworksPaper : styles.howitworksPaper3}
                    >
                      <Typography variant="body1" sx={{ fontSize: "18px" }}>
                        {benefit}
                      </Typography>
                    </Paper>
                  </Box>
                </Grid>
              </>
            ))}
          </Grid>
        )}
      </Container>
    </section >
  );
};

export default App;
