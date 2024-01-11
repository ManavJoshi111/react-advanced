import "./App.css";
import Counter from "./components/Counter";
import { UseEffect } from "./components/UseEffect";
function App() {
  return (
    <>
      <Counter min={0} max={10} />
      {/* <UseEffect /> */}
    </>
  );
}

export default App;
