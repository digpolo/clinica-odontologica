
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Route, Routes } from 'react-router-dom'
import Contact from "./pages/Contact"
import Details from "./pages/Detail"
import Home from "./pages/Home"
import Favs from "./pages/Favs"
import './index.css'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/details' element={<Details />} />
        <Route path='/favs' element={<Favs />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;

