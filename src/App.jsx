import { RouterProvider } from "react-router-dom"
import router from "./routers/Routers"

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
