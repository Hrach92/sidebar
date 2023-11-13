import { Box, Divider, Typography } from "@mui/material";
import { memo } from "react";
import sxStyle from "./sxStyle.sx";
import Date from "../date";

const Sidebar = (): JSX.Element => {
  return (
    <Box sx={sxStyle.container}>
      <Typography sx={sxStyle.title} variant="h4">
        Параметры подбора
      </Typography>
      <Divider sx={sxStyle.divider} />
      <Date />
    </Box>
  );
};
export default memo(Sidebar);
