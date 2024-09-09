import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../reducers/counterReducer"

export default function Counter () {

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
  
  return (
    <div className="counter">
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>
            Incrémenter le compteur
        </button>
        <button onClick={() => dispatch(decrement())}>
            Décrémenter le compteur
        </button>
    </div>
  )
}
