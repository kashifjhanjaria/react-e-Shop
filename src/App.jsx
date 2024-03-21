import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RouteLayout from './web/RouteLayout'
import Home from './pages/home/Home'
const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route   element={<RouteLayout/>}>
      <Route path='/' element={ <Home/> }/>
    </Route>
  ))
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App