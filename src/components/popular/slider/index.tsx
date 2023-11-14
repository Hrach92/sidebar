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
  defaultValue?: number;
};

function SliderComponent({
  title,
  specification,
  defaultValue,
}: SliderTypes): JSX.Element {
  const { max, min, step } = specification;

  return (
    <Box sx={sxStyle.container}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={sxStyle.menu}>
          <Typography variant="subtitle1" sx={sxStyle.title}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            min={min}
            max={max}
            size="small"
            defaultValue={defaultValue}
            step={step}
            valueLabelDisplay="on"
            onChange={(e: any) => {
              console.log(e.target?.value as number);
            }}
          />
          <Box sx={sxStyle.values}>
            <Typography>{min}</Typography>
            <Typography>{max}</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default SliderComponent;
