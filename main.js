import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = /*html*/`

  <div>
    <h1>Hello Vite!</h1>
    <h2></h2>
    </div>
`
setupCounter(document.querySelector('#counter'))
