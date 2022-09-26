import { memo } from "react";
import ListTask from "../ListTask/ListTask";
import FormStyles from "./Form.styles";
import ListTasksStyles from "../ListTask/ListTask.styles";
import Button from "../Button/Button.styles";
import Autocomplete from "@mui/material/Autocomplete";

import useFormTask from "./useFormTask";

function Form() {
  const {
    onSubmit,
    register,
    handleSubmit,
    errors,
    addTaskOnList,
    taskListClone,
  } = useFormTask();

  return (
    <>
      <FormStyles.TitleToDoList>ToDo List</FormStyles.TitleToDoList>
      <FormStyles.StyledForm data-testid="form-field" onSubmit={handleSubmit(onSubmit)}>
        <Autocomplete
          options={taskListClone}
          renderInput={(params) => (
            <ListTasksStyles.ItemTextField
              data-testid="input-form"
              {...params}
              id="outlined-basic"
              placeholder="Digite uma tarefa"
              variant="outlined"
              {...register("taskRequired", { required: true })}
              onChange={addTaskOnList}
            />
          )}
        />

        {errors.taskRequired && (
          <FormStyles.Span data-testid="input-form-error">Este campo é obrigatório.</FormStyles.Span>
        )}
        <br />

        <Button.ButtonAdd data-testid="form-button-add" variant="contained" color="secondary" type="submit">
          Adicionar
        </Button.ButtonAdd>
        <ListTask />
      </FormStyles.StyledForm>
    </>
  );
}

export default memo(Form);
