import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Slider } from "@mui/material";
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
    <div className={sxStyle.container}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={sxStyle.menu}>
          <span className={sxStyle.title}>{title}</span>
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
          <div className={sxStyle.slider}>
            <span className={sxStyle.sliderItem}>{min}</span>
            <span className={sxStyle.sliderItem}>{max}</span>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SliderComponent;
