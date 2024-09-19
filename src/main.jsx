import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './css/input.css'
import { RouterProvider } from 'react-router-dom'
import Route  from './routes/Route.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={Route}/>
  </StrictMode>,
)
