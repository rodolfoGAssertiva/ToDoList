import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ButtonAdd = styled(Button)({
  marginTop: "2ch",
  width: "40ch",
});

const ButtonRemove = styled(Button)({
  fontSize: 14,
  padding: "4px 5px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  height: "fitContent",
  marginTop: "1.5ch",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
}) as typeof Button;


const Buttons = {
    ButtonAdd,
    ButtonRemove
}

export default Buttons;