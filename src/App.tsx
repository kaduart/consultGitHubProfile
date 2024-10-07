import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./routes/home"
import Search from "./routes/search"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  index element={<Home />} />
          <Route path="search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
