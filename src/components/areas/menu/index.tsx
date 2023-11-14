import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import sxStyle from "./sxStyle.sx";
import { areas } from "@/dependencies/instance";
import { useDispatch } from "@/hooks/redux";
import { setAreas } from "@/store/reducer/sidebar";
import useBoolean from "@/hooks/useBoolean";

function MenuContainer() {
  const dispatch = useDispatch();
  const { open, setToggle } = useBoolean();

  const [value, setValue] = React.useState(areas);

  const checkedValues = React.useCallback(
    (id: number) => {
      const newValues = value.map((v) => {
        if (v.id === id) {
          v.isChecked = !v.isChecked;
        }
        return { ...v };
      });

      setValue(newValues);
      dispatch(setAreas(newValues));
    },
    [dispatch, value]
  );

  return (
    <Box sx={sxStyle.container}>
      <Button
        onClick={setToggle}
        sx={sxStyle.button}
        disableRipple
        endIcon={<KeyboardArrowDownIcon />}
      >
        Любой
      </Button>
      {open && (
        <Box sx={sxStyle.menu}>
          {value.map(({ title, isChecked, id }) => {
            return (
              <MenuItem
                key={id}
                disableRipple
                onClick={() => checkedValues(id)}
                sx={[sxStyle.item, isChecked && sxStyle.active]}
              >
                {title}
              </MenuItem>
            );
          })}
        </Box>
      )}
    </Box>
  );
}
export default MenuContainer;
