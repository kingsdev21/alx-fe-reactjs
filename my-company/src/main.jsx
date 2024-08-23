import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />} >
//       <Route path='about' element={<About />} />
//       <Route path='home' element={<Home />} />
//     </Route>
//   )
// )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
