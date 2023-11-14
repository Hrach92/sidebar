import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Slider } from "@mui/material";
import sxStyle from "./sxStyle.sx";
import { Specification } from "@/dependencies/types";
import { useDispatch } from "@/hooks/redux";

type SliderTypes = {
  title?: string;
  specification: Specification;
  defaultValue?: number;
  setValue?: (val: number) => void;
};

function SliderComponent({
  title,
  specification,
  defaultValue,
  setValue = () => {},
}: SliderTypes): JSX.Element {
  const { max, min, step } = specification;
  const dispatch = useDispatch();
  const [size, setSize] = React.useState(defaultValue);

  const onChange = React.useCallback(
    (val: number) => {
      dispatch(setValue(val));
      setSize(val);
    },
    [dispatch, setValue]
  );

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
            value={size}
            onChange={(e: any) => onChange(e.target.value)}
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
