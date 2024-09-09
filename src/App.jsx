import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { randomColor } from './redux/reducers/colorReducer'
import Counter from './redux/actions/Counter'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'

export default function App() {

  const color = useSelector(state => state.color.value)
  const dispatch = useDispatch()

  useEffect(()=>{
    document.querySelector('body').style.backgroundColor = color
  },[color])

  return (
    <div className='container'>
      <h1>Counter | Color</h1>
      <div>
         <a href="https://vitejs.dev" target="_blank">
           <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
       <a href="https://react.dev" target="_blank">
         <img src={reactLogo} className="logo react" alt="React logo" />
         </a>
      </div>
      <>
        <button onClick={()=> { dispatch(randomColor()) }}>Change Background Color</button>
        <Counter/>
      </>
    </div>
  )
}

