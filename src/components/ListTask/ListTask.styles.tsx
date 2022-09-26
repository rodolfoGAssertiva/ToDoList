<<<<<<< HEAD
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
// import Input from "../Input/Input";
import List, { ListProps } from "@mui/material/List";
import ListItemText, { ListItemTextProps } from "@mui/material/ListItemText";

const RootList = styled(List)<ListProps>(({ theme }) => ({
  width: "100%",
  maxWidth: "56ch",
  backgroundColor: theme.palette.background.paper,
}));

const LstItemText = styled(ListItemText)<ListItemTextProps>(({ theme }) => ({
  marginLeft: "2ch",
  fontFamily:"Permanent Marker, cursive",
  marginRight: "2ch",
  display: "flex",
  alignItems: "center",
  width: "100%",
  maxWidth: 360,
  backgroundColor: theme.palette.background.paper,
}));

const ItemList = styled(List)(() => ({
  margin: "1ch",
  display: "flex",
  width: "54ch",
}));

const ItemTextField = styled(TextField)(() => ({
  margin: "1ch",
  display: "flex",
  width: "60ch",
}));

const ListTasksStyles = {
  RootList,
  LstItemText,
  ItemList,
  ItemTextField,
};

export default ListTasksStyles;
=======
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import List, { ListProps } from "@mui/material/List";
import ListItemText, { ListItemTextProps } from "@mui/material/ListItemText";

const RootList = styled(List)<ListProps>(({ theme }) => ({
  width: "100%",
  maxWidth: "56ch",
  backgroundColor: theme.palette.background.paper,
}));

const LstItemText = styled(ListItemText)<ListItemTextProps>(({ theme }) => ({
  marginLeft: "2ch",
  fontFamily:"Permanent Marker, cursive",
  marginRight: "2ch",
  display: "flex",
  alignItems: "center",
  width: "100%",
  maxWidth: 360,
  backgroundColor: theme.palette.background.paper,
}));

const ItemList = styled(List)(() => ({
  margin: "1ch",
  display: "flex",
  width: "54ch",
}));

const ItemTextField = styled(TextField)(() => ({
  margin: "1ch",
  display: "flex",
  width: "60ch",
}));

const ListTasksStyles = {
  RootList,
  LstItemText,
  ItemList,
  ItemTextField,
};

export default ListTasksStyles;
>>>>>>> 9c76f0e009957d957e3f3f1077a4b581a47ec381
