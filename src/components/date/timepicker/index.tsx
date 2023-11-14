import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { Box, Typography } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import { TimePicker } from "@mui/x-date-pickers";

function TimePickerContainer() {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );

  return (
    <Box sx={sxStyle.container}>
      <Box>
        <Typography variant="subtitle1">Начнем в</Typography>
        <TimePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
          sx={sxStyle.item}
        />
      </Box>
      <Box>
        <Typography variant="subtitle1">Закончим в</Typography>
        <TimePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
          sx={sxStyle.item}
        />
      </Box>
    </Box>
  );
}

export default TimePickerContainer;
