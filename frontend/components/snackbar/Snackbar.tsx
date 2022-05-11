import { useSelector, useDispatch } from "react-redux";
import {
  errorSelector,
  setOpenSnackbar,
} from "../../store/errorHandler/errorSlice";
import { StyledSnackbar } from "./StyledSnackbar";

export default function Snackbar() {
  const dispatch = useDispatch();
  const { openSnackbar, errorMessage } = useSelector(errorSelector);

  const onDismissSnackBar = () => dispatch(setOpenSnackbar(false));

  return (
    <StyledSnackbar
      visible={openSnackbar}
      onDismiss={onDismissSnackBar}
      action={{
        label: "",
        icon: "close",
        color: "white",
      }}
    >
      {errorMessage}
    </StyledSnackbar>
  );
}
