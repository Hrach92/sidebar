import { Box, Button, Divider, Typography } from "@mui/material";
import { memo, useCallback } from "react";
import sxStyle from "./sxStyle.sx";
import Date from "../date";
import Areas from "../areas";
import Popular from "../popular";
import Additionally from "../additionally";
import { useSelector } from "@/hooks/redux";
import { SidebarSate } from "@/store/reducer/sidebar";
import axios from "axios";

const Sidebar = (): JSX.Element => {
  const sidebar = useSelector(SidebarSate);

  const send = useCallback(async () => {
    try {
      await axios.post("http://localohost:5050", sidebar);
    } catch (err: any) {
      console.log(err.message);
    }
  }, [sidebar]);

  return (
    <Box sx={sxStyle.container}>
      <Typography sx={sxStyle.title} variant="h4">
        Параметры подбора
      </Typography>
      <Divider sx={sxStyle.divider} />
      <Date />
      <Areas />
      <Popular />
      <Additionally />
      <Button onClick={send}>Submit</Button>
    </Box>
  );
};
export default memo(Sidebar);
