import { useReducer } from "react";
import "./app.css"

const initialValue = {
  count: 0,
  
 
};

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + action.payload };
    case "decrease":
      return state.count > 0 ? { ...state, count: state.count - 1 } : state;
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <div>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({ type: "increase", payload : 1 })}>Increase</button>
        <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </>
  );
}

export default App;
