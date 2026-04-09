// import FaceExpression from './features/Expression/components/FaceExpression'
import { RouterProvider } from 'react-router'
import {router} from "./app.routes"
import './features/shared/styles/global.scss'

function App() {

  return (
  // <FaceExpression/>
  <RouterProvider router={router}/>
  )
}

export default App
