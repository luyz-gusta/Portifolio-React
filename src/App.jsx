import { RouterProvider } from "react-router-dom"
import router from "./routes/router"
import DataProvider from "./contexts/DataProvider"
import './index.css'

function App() {

  return (
    <DataProvider >
        <RouterProvider router={router} />
    </DataProvider>
  )
}

export default App
