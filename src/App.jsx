import { useState } from 'react'


import ComponentSample1 from './components/ComponentSamples/ComponentSamples'
import ComponentProps from './components/ComponentProps/ComponentProps'
import ComponentConditionalRendering from './components/ComponentConditionalRendering/ComponentConditionalRendering'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ComponentSample1 />
      <ComponentProps title={"Titulo"} content={"Conteudo"} subtitle={"subtitulo"} />
      <ComponentProps />
      <ComponentConditionalRendering name="Felipe"/>
      <ComponentConditionalRendering/>
    </>
  )
}

export default App
