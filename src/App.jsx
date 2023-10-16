import { Route, Routes } from "react-router-dom"
import Layout from "./assets/components/Layout"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>

        </Route>
      </Routes>
    </div>
  )
}

export default App
