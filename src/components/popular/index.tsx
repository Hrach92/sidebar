import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import style from "./style";
import Slider from "./slider";
import CheckboxComponent from "./checkbox";
import { capacity, rating, specification } from "@/dependencies/instance";
import { useSelector } from "@/hooks/redux";
import { SidebarSate } from "@/store/reducer/sidebar";

function Popular() {
  const {
    capacity: capacityDefault,
    rating: ratingDefault,
    price,
    square,
  } = useSelector(SidebarSate);
  return (
    <div className={style.container}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={style.menu}>
          <span className={style.title}>Популярные фильтры</span>
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            title="Цена 1 часа аренды"
            specification={specification}
            defaultValue={price}
          />
          <CheckboxComponent
            title="Вместимость"
            radioParams={capacity}
            defaultValue={capacityDefault}
          />
          <Slider
            title="Площадь (кв.м)"
            specification={specification}
            defaultValue={square}
          />
          <CheckboxComponent
            title="Рейтинг по отзывам"
            radioParams={rating}
            defaultValue={ratingDefault}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Popular;
