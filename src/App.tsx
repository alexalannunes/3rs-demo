import { Readability } from "./1-readable";
import { Reusability } from "./2-reusable";
import { Refactorability } from "./3-refactorable";

function App() {
  return (
    <div className="App">
      <Readability />
      <hr />
      <Reusability />
      <hr />
      <Refactorability />
    </div>
  );
}

export default App;
