import * as React from "react";
import dayjs from "dayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import sxStyle from "./sxStyle.sx";
import { useDispatch, useSelector } from "@/hooks/redux";
import { SidebarSate, setDate } from "@/store/reducer/sidebar";

export default function ResponsiveDatePickers() {
  const { date } = useSelector(SidebarSate);
  const dispatch = useDispatch();

  return (
    <DesktopDatePicker
      defaultValue={dayjs(date)}
      value={dayjs(date)}
      sx={sxStyle.container}
      onChange={(e: any) => dispatch(setDate(`${e.$y}-${e.$M + 1}-${e.$D}`))}
    />
  );
}
