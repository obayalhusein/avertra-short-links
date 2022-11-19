import { CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./pages/home";
import Theme from "./themes/default";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      {/* I would use react-router if there is more pages */}
      <Home />
    </ThemeProvider>
  );
}

export default App;