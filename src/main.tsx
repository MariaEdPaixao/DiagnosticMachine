import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from './global-styled.ts'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Error from './routes/Error/index.tsx'
import Login from './routes/Login/index.tsx'
import Sobre from './routes/Sobre/index.tsx'
import Chat from './routes/Chat/index.tsx'
import Ajuda from './routes/Ajuda/index.tsx'
import Aprenda from './routes/Aprenda/index.tsx'



const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
        {
          path: '/',
          element: <Login/>
        },
        {
          path: '/sobre',
          element: <Sobre/>
        },
        {
          path: '/chat',
          element: <Chat/>
        },
        {
          path: '/ajuda',
          element: <Ajuda/>
        },
        {
          path:'/aprenda+',
          element: <Aprenda/>
        }
      ]
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <GlobalStyle/>
  </StrictMode>,
)
