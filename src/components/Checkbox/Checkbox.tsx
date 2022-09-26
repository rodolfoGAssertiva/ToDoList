import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

function CheckboxList() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 40, bgcolor: "background.paper" }}>
        {[0].map((value) => {
          return (
            <ListItem key={value} disablePadding>
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value)}
                dense
              >
                <span data-testid='checkbox-field'></span>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) === -1}
                    tabIndex={-1}
                    disableRipple
                  />
                <ListItemText/>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default React.memo(CheckboxList)