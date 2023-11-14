import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import Slider from "./slider";
import CheckboxComponent from "./checkbox";
import { capacity, rating, specification } from "@/dependencies/instance";
import { useSelector } from "@/hooks/redux";
import {
  SidebarSate,
  setCapacity,
  setPrice,
  setRating,
  setSquare,
} from "@/store/reducer/sidebar";

function Popular(): JSX.Element {
  const {
    capacity: capacityDefault,
    rating: ratingDefault,
    price,
    square,
  } = useSelector(SidebarSate);

  return (
    <Box sx={sxStyle.container}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={sxStyle.menu}>
          <Typography sx={sxStyle.title}>Популярные фильтры</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            title="Цена 1 часа аренды"
            specification={specification}
            defaultValue={price}
            setValue={setPrice}
          />
          <CheckboxComponent
            title="Вместимость"
            radioParams={capacity}
            defaultValue={capacityDefault}
            setValue={setCapacity}
            value={capacityDefault}
          />
          <Slider
            title="Площадь (кв.м)"
            specification={specification}
            defaultValue={square}
            setValue={setSquare}
          />
          <CheckboxComponent
            title="Рейтинг по отзывам"
            radioParams={rating}
            defaultValue={ratingDefault}
            setValue={setRating}
            value={ratingDefault}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Popular;
