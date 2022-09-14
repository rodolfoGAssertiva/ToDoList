import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  taskExample: string;
  taskRequired: string;
};

const taskList: Array<string> = [];
const taskListClone: Array<string> = [];

const useFormTasks = () => {
  const [value, setValue] = useState<string>("");
  const [itemsList, setItems] = useState<string[]>([]);

  const addTaskOnList = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };

  const handleRemoveValue = (index: number) => {
    taskList.splice(index, 1);
    setItems([...taskList]);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setItems([...itemsList, value]);
    let tasks = data.taskRequired;
    taskList.push(tasks);
    if (!taskListClone.includes(tasks)) {
      taskListClone.push(tasks);
    }
    reset({ taskRequired: "" });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  return {
    value,
    itemsList,
    setValue,
    setItems,
    handleRemoveValue,
    onSubmit,
    register,
    handleSubmit,
    errors,
    reset,
    useForm,
    addTaskOnList,
    taskList,
    taskListClone,
  };
};

export default useFormTasks;
