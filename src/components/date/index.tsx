import { Typography } from "@mui/material";
import { memo } from "react";
import sxStyle from "./sxStyle.sx";
import ResponsiveDatePickers from "./datePicker";
import TimePicker from "./timepicker";

const Date = (): JSX.Element => {
  return (
    <>
      <Typography sx={sxStyle.title} variant="subtitle1">
        Дата и время праздника
      </Typography>
      <ResponsiveDatePickers />
      <TimePicker />
    </>
  );
};
export default memo(Date);
