import { Cart as CartBad } from "./1-readable/bad";
import { Cart as CartGood } from "./1-readable/good";

const CartComponent = {
  bad: CartBad,
  good: CartGood,
};

const Cart = CartComponent["good"];

function App() {
  return (
    <div className="App">
      <h1>Readability - Reusability - Refactorability</h1>
      <hr />
      <Cart />
    </div>
  );
}

export default App;
