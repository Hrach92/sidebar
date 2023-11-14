import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Slider } from "@mui/material";
import sxStyle from "./sxStyle.sx";
type SliderTypes = {
  title?: string;
};
function SliderComponent({ title }: SliderTypes): JSX.Element {
  const marks = [
    {
      value: 1600,
      label: "1600",
    },
    {
      value: 3800,
      label: "3800",
    },
  ];
  return (
    <Box sx={sxStyle.container}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={sxStyle.menu}>
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            min={1600}
            max={3800}
            size="small"
            defaultValue={2000}
            step={10}
            aria-label="Small"
            valueLabelDisplay="auto"
            marks={marks}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default SliderComponent;
