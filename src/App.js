// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Dashboard 2 React themes
import theme from "assets/theme-dark";
import ShipmentsTable from "myComponents/shipmentsTable/ShipmentsTable";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ShipmentsTable />
    </ThemeProvider>
  );
}
