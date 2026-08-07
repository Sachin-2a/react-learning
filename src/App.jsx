import NavBar from "./components/NavBar"
import Footer from './components/Footer'
import Home from "./Pages/Home"
import { Route, Routes } from "react-router-dom"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import NotFoundPage from "./Pages/NotFoundPage"


function App() {
  return (
    <>
    <div className="h-screen bg-black text-white">
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    <Footer/>
    </div>


   </>
  )
}
export default App
