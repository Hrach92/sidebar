import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Slider } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import { Specification } from "@/dependencies/types";

type SliderTypes = {
  title?: string;
  specification: Specification;
};

function SliderComponent({ title, specification }: SliderTypes): JSX.Element {
  const { defaultValue, marks, max, min, step } = specification;

  return (
    <Box sx={sxStyle.container}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={sxStyle.menu}>
          <Typography variant="subtitle1">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            min={min}
            max={max}
            size="small"
            defaultValue={defaultValue}
            step={step}
            marks={marks}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default SliderComponent;
