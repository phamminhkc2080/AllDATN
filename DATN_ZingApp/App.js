import { Provider } from "react-redux";
import { store } from "./redux/store";
import Router from "./screens/container-navigation/Router";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
