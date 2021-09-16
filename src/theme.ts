import { createTheme } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";

const theme = createTheme({
    palette: {
        primary: teal
    },
    typography: {
        fontFamily: 'Nunito',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    }
});

export default theme;