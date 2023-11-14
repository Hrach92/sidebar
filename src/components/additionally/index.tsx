import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import CheckboxComponent from "../popular/checkbox";

function Additionally() {
  return (
    <Box sx={sxStyle.container}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={sxStyle.menu}>
          <Typography sx={sxStyle.title}>Дополнительно</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CheckboxComponent title="зонирование" />
          <CheckboxComponent title="Что еще есть" />
          <CheckboxComponent title="Условия" />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Additionally;
