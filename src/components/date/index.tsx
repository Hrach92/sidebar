import { Typography } from "@mui/material";
import { memo } from "react";
import sxStyle from "./sxStyle.sx";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import ResponsiveDatePickers from "./datePicker";

const Date = (): JSX.Element => {
  return (
    <>
      <Typography sx={sxStyle.title} variant="subtitle1">
        Дата и время праздника
      </Typography>
      <ResponsiveDatePickers />
    </>
  );
};
export default memo(Date);
