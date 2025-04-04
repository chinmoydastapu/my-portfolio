import { RouterProvider } from "react-router-dom";
import router from "./routers/routers";

function App() {
  return (
    <div className="font-roboto bg-[#32363b]">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
