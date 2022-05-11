import { Provider } from "react-redux";
import AllNavigations from "./AllNavigations";
import Snackbar from "./components/snackbar/Snackbar";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <AllNavigations />
      <Snackbar />
    </Provider>
  );
}
