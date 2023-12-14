import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/plans' element={<Cards/>} />
          <Route path='/contact' element ={<Contact/>}/>
          <Route path='/form' element = {<Form/>}/>
        </Routes>

        <Footer/>
      </>
    </BrowserRouter>
  );
}

export default App;
