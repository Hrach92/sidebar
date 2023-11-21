import { Box, Typography } from "@mui/material";
import Menu from "./menu";
import sxStyle from "./sxStyle.sx";

const Areas = () => {
  return (
    <Box sx={sxStyle.container}>
      <span className="w-full text-light text-black font-light">Район</span>
      <Menu />
    </Box>
  );
};
export default Areas;
