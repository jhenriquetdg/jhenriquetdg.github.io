import { useState } from 'react'
import logo from '../assets/logo.svg'
import '../styles/App.css'
import Primeiro from './Primeiro'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <section className="flex flex-col items-center bg-zinc-800 ">
        <div className="h-[50vh] w-[100%] flex justify-center bg-zinc-900 outline outline-1" id="particles-js">
          <h1 className="m-[10px] text-orange-600 text-3xl">Welcome</h1>
        </div>
        <div className="w-[90%] bg-zinc-400 h-[100vh] m-[-30vh]">

        </div>
  
      </section>
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello Vite + React!</p>
          <p>From José to Github Pages</p>
          <Primeiro />
          <p>
            <button type="button" onClick={() => setCount((count) => count + 1)}>
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.jsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
      </div>
    </>
  )
}

export default App
