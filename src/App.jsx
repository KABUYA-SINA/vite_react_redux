
import { store } from './redux/store/store';
import {useEffect, useState, useRef} from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './redux/actions/index'
import './App.css'

function App() {
  const [counter, setCounter] = useState(store);
  const counterContainer = useRef(null);

  useEffect(() => {
    store.subscribe(() => {
      const state = store.getState();
      setCounter(state.counter);
      if (counterContainer.current) {
        counterContainer.current.innerHTML = state.counter;
      }
    });
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <span ref={counterContainer}>{store.counter ? counter : 0}</span>
      <button id="incr" onClick={() => store.dispatch({ type: 'INCREMENT' })}>
        Incrémenter
      </button>
      <button id="decr" onClick={() => store.dispatch({ type: 'DECREMENT' })}>
        Décrémenter
      </button>
    </>
  );
}

export default App



