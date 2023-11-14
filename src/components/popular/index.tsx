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
import { specification } from "@/dependencies/instance";

function Popular() {
  return (
    <Box sx={sxStyle.container}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={sxStyle.menu}>
          <Typography sx={sxStyle.title}>Популярные фильтры</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Slider title="Цена 1 часа аренды" specification={specification} />
          <CheckboxComponent title="Вместимость" />
          <Slider title="Площадь (кв.м)" specification={specification} />
          <CheckboxComponent title="Рейтинг по отзывам" />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Popular;
