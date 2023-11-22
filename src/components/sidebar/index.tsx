import { Button } from "@mui/material";
import { memo, useCallback } from "react";
import style from "./style";
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
      axios.post("http://localohost:5050", sidebar);
    } catch (err: any) {
      console.log(err.message);
    }
  }, [sidebar]);

  return (
    <div className={style.container}>
      <span className={style.title}>Параметры подбора</span>
      <div className={style.divider} />
      <Date />
      <Areas />
      <Popular />
      <Additionally />
      <button
        className="text-size14 font-gilroy border border-solid border-black-[1px] text-[blue] cursor-pointer rounded-[3px]"
        onClick={send}
      >
        Submit
      </button>
    </div>
  );
};
export default memo(Sidebar);
