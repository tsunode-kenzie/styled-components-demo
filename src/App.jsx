import { useState } from "react";
import Bulb from "./components/Bulb";
import ButtonMain from "./components/Button";
import Counter from "./components/Counter";
import Switch from "./components/Switch";
import Global from "./styles/global";

function App() {
  const [isLight, setIsLight] = useState(false);

  return (
    <div className="App">
      <Global />
      {/* <Counter />
      <Bulb isLight={isLight} />
      <Switch setIsLight={setIsLight} /> */}
      <ButtonMain />
    </div>
  );
}

export default App;
