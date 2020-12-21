import React from 'react'
import { mainRoute } from './routes'
import RouteMapper from './utils/Router/RouteMapper'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <RouteMapper data={mainRoute} />
    </BrowserRouter>
  )
}

export default App