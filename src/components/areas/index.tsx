import { Box, Typography } from "@mui/material";
import Menu from "./menu";
import sxStyle from "./sxStyle.sx";

const Areas = () => {
  return (
    <Box sx={sxStyle.container}>
      <Typography variant="subtitle1">Район</Typography>
      <Menu />
    </Box>
  );
};
export default Areas;
