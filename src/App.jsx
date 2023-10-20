import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import useWeather from "./hooks/useWeather";

function App() {
  const apiKey = import.meta.env.API_KEY;
  const apiUrl = import.meta.env.API_URL;

  useWeather(apiKey, apiUrl)
  
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
