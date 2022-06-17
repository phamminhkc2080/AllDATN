import { createContext, useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Audio } from "expo-av";
import Router from "./screens/container-navigation/Router";
import SongProvider from "./contexts/SongProvider";

export default function App() {
  // const {
  //   songs,
  //   index,
  //   isShow,
  //   isSliding,
  //   isRepeat,
  //   isPlaying,
  // } = useState((state) => state);

  return (
    <Provider store={store}>
      <SongProvider>
        <Router />
      </SongProvider>
    </Provider>
  );
}
