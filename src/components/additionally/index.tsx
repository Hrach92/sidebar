import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import CheckboxComponent from "../popular/checkbox";
import { zoning } from "@/dependencies/instance";
import { useSelector } from "@/hooks/redux";
import { SidebarSate } from "@/store/reducer/sidebar";

function Additionally() {
  const { zoning: zoningDefault } = useSelector(SidebarSate);
  return (
    <Box sx={sxStyle.container}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={sxStyle.menu}>
          <span className="text-regular font-regular">Дополнительно</span>
        </AccordionSummary>
        <AccordionDetails>
          <CheckboxComponent
            title="зонирование"
            radioParams={zoning}
            defaultValue={zoningDefault}
          />
          <CheckboxComponent title="Что еще есть" />
          <CheckboxComponent title="Условия" />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default Additionally;
