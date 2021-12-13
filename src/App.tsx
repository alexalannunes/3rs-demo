import { Provider } from "react-redux";
import { Readability } from "./1-readable";
import { Reusability } from "./2-reusable";
import { Refactorability } from "./3-refactorable";
import store from "./3-refactorable/good/store";

function App() {
  return (
    <div className="App">
      <Readability />
      <hr />
      <Reusability />
      <hr />
      <Provider store={store}>
        <Refactorability />
      </Provider>
    </div>
  );
}

export default App;
