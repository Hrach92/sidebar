import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import sxStyle from "./sxStyle.sx";
import { TimePicker } from "@mui/x-date-pickers";

function TimePickerContainer() {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );

  return (
    <div className="w-full flex flex-row gap-[20px] p-0 mt-[25px]">
      <div>
        <span className="text-size14 font-font400 text-black tracking-ls font-gilroy">
          Начнем в
        </span>
        <TimePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
          sx={sxStyle.item}
        />
      </div>
      <div>
        <span className="text-size14 font-font400 text-black tracking-ls font-gilroy">
          Начнем в
        </span>
        <TimePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
          sx={sxStyle.item}
        />
      </div>
    </div>
  );
}

export default TimePickerContainer;
