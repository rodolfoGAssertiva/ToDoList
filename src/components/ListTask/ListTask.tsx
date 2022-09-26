<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import useFormTasks from "../Form/useFormTask";

import CheckBoxList from "../Checkbox/Checkbox";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListTasksStyles from "./ListTask.styles";
import Buttons from "../Button/Button.styles";

function ListTask() {
  const { taskList, handleRemoveValue } = useFormTasks();

  return (
    <>
      <ListTasksStyles.RootList>
        {taskList.map((items, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListTasksStyles.LstItemText
                primary={
                  <ListTasksStyles.ItemList>
                    <CheckBoxList />
                    <ListTasksStyles.LstItemText>
                      {" "}
                      {items}{" "}
                    </ListTasksStyles.LstItemText>
                    <Stack spacing={2} direction="row">
                      <Buttons.ButtonRemove
                        data-testid="form-button-remove"
                        variant="contained"
                        disableRipple
                        onClick={() => handleRemoveValue(index)}
                      >
                        Remover
                      </Buttons.ButtonRemove>
                    </Stack>
                  </ListTasksStyles.ItemList>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </ListTasksStyles.RootList>
    </>
  );
}

export default ListTask;
=======
import useFormTasks from "../Form/useFormTask";

import CheckBoxList from "../Checkbox/Checkbox";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListTasksStyles from "./ListTask.styles";
import Buttons from "../Button/Button.styles";

function ListTask() {
  const { taskList, handleRemoveValue } = useFormTasks();

  return (
    <>
      <ListTasksStyles.RootList>
        {taskList.map((items, index) => (
          <>
            <ListItem key={index} alignItems="flex-start">
              <ListTasksStyles.LstItemText
                primary={
                  <ListTasksStyles.ItemList>
                    <CheckBoxList />
                    <ListTasksStyles.LstItemText>
                      {" "}
                      {items}{" "}
                    </ListTasksStyles.LstItemText>
                    <Stack spacing={2} direction="row">
                      <Buttons.ButtonRemove
                        variant="contained"
                        disableRipple
                        onClick={() => handleRemoveValue(index)}
                      >
                        Remover
                      </Buttons.ButtonRemove>
                    </Stack>
                  </ListTasksStyles.ItemList>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </ListTasksStyles.RootList>
    </>
  );
}

export default ListTask;
>>>>>>> 9c76f0e009957d957e3f3f1077a4b581a47ec381
=======
import useFormTasks from "../Form/useFormTask";

import CheckBoxList from "../Checkbox/Checkbox";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListTasksStyles from "./ListTask.styles";
import Buttons from "../Button/Button.styles";

function ListTask() {
  const { taskList, handleRemoveValue } = useFormTasks();

  return (
    <>
      <ListTasksStyles.RootList>
        {taskList.map((items, index) => (
          <>
            <ListItem key={index} alignItems="flex-start">
              <ListTasksStyles.LstItemText
                primary={
                  <ListTasksStyles.ItemList>
                    <CheckBoxList />
                    <ListTasksStyles.LstItemText>
                      {" "}
                      {items}{" "}
                    </ListTasksStyles.LstItemText>
                    <Stack spacing={2} direction="row">
                      <Buttons.ButtonRemove
                        variant="contained"
                        disableRipple
                        onClick={() => handleRemoveValue(index)}
                      >
                        Remover
                      </Buttons.ButtonRemove>
                    </Stack>
                  </ListTasksStyles.ItemList>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </ListTasksStyles.RootList>
    </>
  );
}

export default ListTask;
>>>>>>> 9c76f0e009957d957e3f3f1077a4b581a47ec381
