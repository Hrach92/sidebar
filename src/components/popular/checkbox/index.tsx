import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import sxStyle from "./sxStyle.sx";
import { CheckboxParamTypes } from "@/dependencies/types";

type CheckboxTypes = {
  title?: string;
  radioParams?: CheckboxParamTypes[];
  defaultValue?: string;
};

function CheckboxComponent({
  title,
  radioParams = [],
  defaultValue,
}: CheckboxTypes): JSX.Element {
  return (
    <Box sx={sxStyle.container}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={sxStyle.menu}>
          <span className="text-size14 text-grey3 font-font600 tracking-ls font-gilroy">
            {title}
          </span>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={defaultValue}
              name="radio-buttons-group"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            >
              {radioParams.map(({ value, label, id }) => {
                return (
                  <React.Fragment key={id}>
                    <FormControlLabel
                      value={value}
                      control={<Radio />}
                      label={label}
                      sx={sxStyle.label}
                    />
                  </React.Fragment>
                );
              })}
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default CheckboxComponent;
