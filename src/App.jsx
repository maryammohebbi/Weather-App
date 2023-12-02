import { Toaster } from "react-hot-toast"
import Home from "./components/Home"
import Header from "./components/Header"
import Nav from "./components/Nav"
import useFetch from "./hooks/useFetch"

function App() {
  const apiKey = import.meta.env.VITE_API_KEY
  const apiUrl = import.meta.env.VITE_API_URL
  const {setQuery, isLoading, weather} = useFetch(apiUrl, apiKey)

  return (
    <div>
      <Toaster/>
        <div className="grid grid-cols-6 gap-4 bg-slate-400 bg-opacity-60 shadow-xl max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-4xl p-5 container mx-auto mt-5 rounded-xl">
        <div className="col-span-6 border-b-2 border-slate-400">
          <Header/>
        </div>
        <div className="hidden lg:block row-span-5 row-start-2 border-r-2 border-slate-400">
          <Nav setQuery={setQuery}/>
        </div>
        <div className="col-span-6 lg:col-span-5 row-start-2">
          <Home setQuery={setQuery} isLoading={isLoading} weather={weather}/>
        </div>
      </div>
    </div>
  )
}

export default App
