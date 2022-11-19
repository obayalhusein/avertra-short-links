import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function IntroSection() {
  return (
    <section>
      <Grid container alignItems="center" spacing={2}>
        <Grid xs={6}>
          <Typography variant="h2" component="h1">
            <Box fontWeight="fontWeightMedium" component="span">
              More than just shorter links
            </Box>
          </Typography>

          <Typography>
            Build your brand's recognition and get detailed insights on how your links are performing
          </Typography>

          <Button variant="contained">Get Started</Button>
        </Grid>
        <Grid xs={6}>
          <img src="/images/illustrations/illustration-working.svg" />
        </Grid>
      </Grid>
    </section>
  )
}