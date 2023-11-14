import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
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
import { useDispatch } from "@/hooks/redux";

type CheckboxTypes = {
  title?: string;
  radioParams?: CheckboxParamTypes[];
  defaultValue?: string;
  value?: string;
  setValue?: (val: string) => void;
};

function CheckboxComponent({
  title,
  radioParams = [],
  defaultValue,
  value,
  setValue = () => {},
}: CheckboxTypes): JSX.Element {
  const dispatch = useDispatch();

  return (
    <Box sx={sxStyle.container}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={sxStyle.menu}>
          <Typography variant="subtitle1" sx={sxStyle.title}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={defaultValue}
              value={value}
              name="radio-buttons-group"
              onChange={(e) => dispatch(setValue(e.target.value))}
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
