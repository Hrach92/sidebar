import { memo } from "react";
import style from "./style";
import ResponsiveDatePickers from "./datePicker";
import TimePicker from "./timepicker";

const Date = (): JSX.Element => {
  return (
    <>
      <span className={style.title}>Дата и время праздника</span>
      <ResponsiveDatePickers />
      <TimePicker />
    </>
  );
};
export default memo(Date);
