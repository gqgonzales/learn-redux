import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const authentication = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <div>Hello, world!</div>
        <h2>Counter: {counter}</h2>
        <button
          className="btn btn-increase"
          onClick={() => dispatch(increment(5))}
        >
          +5
        </button>
        <button
          className="btn btn-increase"
          onClick={() => dispatch(increment(1))}
        >
          +1
        </button>
        <button
          className="btn btn-decrease"
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
        <br></br>
        <br></br>
        <br></br>
        {authentication ? (
          <>
            {" "}
            <h4>Sensistive information!!!!</h4>
          </>
        ) : null}
      </header>
    </div>
  );
}

export default App;
