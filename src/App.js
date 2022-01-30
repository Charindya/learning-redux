import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, incrementWithParams } from './actions';

function App() {

  //extract counter from state using useSelector
  // state => access to entire state
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  // gives us ability to dispatch an action
  const dispatch = useDispatch();

  //HOLY REDUX DEV TOOLS HAS A RECORDING FEATURE WHAAAA
  // you can click record and complete actions and the pause and play your interactions and view the state changes and actions that were called
  // this is amazing, this is what a lot of the docs are referring to as time-travel because you can literally go back in time to see what 
  // went wrong and when, when you're debugging!
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>  
      {/* to actually increment/decrement, we need to create an action and dispatch it onClick => see actions folder  */}
      <button onClick={() => dispatch(increment())}>+</button>
      
      {/* You can also pass in parameters to action functions! */}
      <button onClick={() => dispatch(incrementWithParams(5))}>+5</button> 

      
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged && <h3>Valuable information I shouldn't see</h3>}
    </div>
  );
}

export default App;
