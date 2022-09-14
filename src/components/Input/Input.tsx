import React, {useState, memo} from "react";
import TextField from "@mui/material/TextField";

interface Props {
  type?: "text" | undefined;
  value: string | undefined;
  color: 'primary' | 'secondary' | undefined;
  placeholder: string | undefined;
  required: boolean;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function BasicTextFields({ type, value, placeholder, color, onChange }: Props) {
  
  const [task, setTask] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

   const focusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocus(true);
    setIsBlur(false);
  };

  const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocus(false);
    setIsBlur(true);

    if(task.match(/^[a-z][a-z\s]*$/i)){
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <form >
      <TextField
        id="outlined-basic"
        label="Digite uma tarefa"
        variant="outlined"
        color={color}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={focusHandler}
        onBlur={blurHandler}
        required
      />
      
      {isFocus && (
        <span className="hint">
          Apenas espaços são aceitaveis.
        </span>
      )}
      {isBlur && !isValid && <p className="error">A tarefa inserida não é válida.</p>}
      {isBlur && isValid && <p className="success">A tarefa inserida é</p>}
    </form>
  );
}

export default memo(BasicTextFields);
