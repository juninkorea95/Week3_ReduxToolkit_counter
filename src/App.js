import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { minusOne, plusOne } from './redux/modules/counter';

function App() {

  const counter = useSelector((state) => state.counter.number)

  const dispatch = useDispatch()

  return (
    <div>
      <div>counter : {counter} </div>
      <button onClick={() => dispatch(plusOne(1))}>+</button>
      <button onClick={() => dispatch(minusOne(1))}>-</button>
    </div>
  );
}

export default App;
