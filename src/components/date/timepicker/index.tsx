import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { Box, Typography } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import { TimePicker } from "@mui/x-date-pickers";
import { useDispatch, useSelector } from "@/hooks/redux";
import { SidebarSate, setTime } from "@/store/reducer/sidebar";

function TimePickerContainer() {
  const { date, time } = useSelector(SidebarSate);
  const dispatch = useDispatch();

  const [value, setValue] = React.useState<{
    from: Dayjs;
    to: Dayjs;
  }>({
    from: dayjs(`${date}T${time.from}`),
    to: dayjs(`${date}T${time.to}`),
  });

  const setFrom = React.useCallback(
    (date: any) => {
      setValue({ ...value, from: date });
      dispatch(setTime({ ...time, from: `${date.$H}:${date.$m}` }));
    },
    [dispatch, time, value]
  );
  const setTo = React.useCallback(
    (date: any) => {
      setValue({ ...value, to: date });
      dispatch(setTime({ ...time, to: `${date.$H}:${date.$m}` }));
    },
    [dispatch, time, value]
  );

  return (
    <Box sx={sxStyle.container}>
      <Box>
        <Typography variant="subtitle1">Начнем в</Typography>
        <TimePicker
          value={value.from}
          onChange={(newValue) => setFrom(newValue as Dayjs)}
          sx={sxStyle.item}
        />
      </Box>
      <Box>
        <Typography variant="subtitle1">Закончим в</Typography>
        <TimePicker
          value={value.to}
          onChange={(newValue) => setTo(newValue as Dayjs)}
          sx={sxStyle.item}
        />
      </Box>
    </Box>
  );
}

export default TimePickerContainer;
