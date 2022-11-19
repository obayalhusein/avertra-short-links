import { createTheme } from "@mui/material";
import palette from "./default/palette";
import typography from "./default/typography";
import components from "./default/components";

const Theme = createTheme({
    palette,
    typography,
    components,
});

export default Theme;