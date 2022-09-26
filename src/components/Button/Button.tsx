<<<<<<< HEAD
<<<<<<< HEAD
import React, {memo} from "react"
import Button from '@mui/material/Button';

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  title: string;
}

function ButtonAdd({ onClick, type, title }: Props) { 
  return (
    <div>
      <Button  type={type} onClick={onClick} variant="contained" color="primary">
        {title}
      </Button>
    </div>
  );
}

export default memo(ButtonAdd);
=======
import React, {memo} from "react"
import Button from '@mui/material/Button';

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  title: string;
}

function ButtonAdd({ onClick, type, title }: Props) { 
  return (
    <div>
      <Button  type={type} onClick={onClick} variant="contained" color="primary">
        {title}
      </Button>
    </div>
  );
}

export default memo(ButtonAdd);
>>>>>>> 9c76f0e009957d957e3f3f1077a4b581a47ec381
=======
import React, {memo} from "react"
import Button from '@mui/material/Button';

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  title: string;
}

function ButtonAdd({ onClick, type, title }: Props) { 
  return (
    <div>
      <Button  type={type} onClick={onClick} variant="contained" color="primary">
        {title}
      </Button>
    </div>
  );
}

export default memo(ButtonAdd);
>>>>>>> 9c76f0e009957d957e3f3f1077a4b581a47ec381
