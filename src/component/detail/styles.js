import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  income: {
    borderBottom: "10px solid rgba(0, 255, 0, 1)",
    backgroundColor: "rgba(0, 255, 0, .5)",
  },
  expense: {
    borderBottom: "10px solid rgba(255, 0, 0, 1)",
    backgroundColor: "rgba(255, 0, 0, .5)",
  },
}));
