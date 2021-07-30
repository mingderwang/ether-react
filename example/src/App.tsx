import React from 'react'

import { ExampleComponent, today } from '@ether-react/contract'
import '@ether-react/contract/dist/index.css'

const App = () => {
  (async function run() {
    await today()
  })()
  return <ExampleComponent text="CC- 😄" />
}

export default App
