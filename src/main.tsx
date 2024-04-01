import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/home/index.tsx'
import Cadastro from './pages/cadastro/index.tsx'
import Login from './pages/login/index.tsx'
import Produtos from './pages/produtos/index.tsx'
import SobreNos from './pages/sobreNos/index.tsx'
import Suporte from './pages/suporte/index.tsx'
import Integrantes from './pages/integrantes/index.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/cadastro',
    element: <Cadastro/>
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/produtos',
    element: <Produtos/>
  },
  {
    path:'/sobreNos',
    element: <SobreNos/>
  },
  {
    path:'/suporte',
    element: <Suporte/>
  },
  {
    path:'/integrantes',
    element: <Integrantes/>
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
