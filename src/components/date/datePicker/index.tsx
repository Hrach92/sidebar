import * as React from "react";
import dayjs from "dayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import sxStyle from "./sxStyle.sx";

export default function ResponsiveDatePickers() {
  return (
    <DesktopDatePicker
      defaultValue={dayjs("2022-04-17")}
      sx={sxStyle.container}
    />
  );
}
