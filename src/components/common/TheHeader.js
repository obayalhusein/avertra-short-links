import { AppBar, Button, IconButton, MenuItem, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

const pages = ['Features', 'Pricing', 'Resources'];

export default function TheHeader () {
    return (
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Toolbar>
          <img width={120} src="/images/logo/logo-text.svg" alt="logo" />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <MenuItem key={page}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button color="inherit">Login</Button>
            <Button color="primary" variant="contained">Sign Up</Button>
          </Box>
          
        </Toolbar>
      </AppBar>
    )
}