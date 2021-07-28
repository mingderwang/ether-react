import React from 'react'

import { ExampleComponent, today } from 'ether-react'
import 'ether-react/dist/index.css'

const App = () => {
  (async function run() {
    await today()
  })()
  console.log(ExampleComponent)
  return <ExampleComponent text="CC- 😄" />
}

export default App
