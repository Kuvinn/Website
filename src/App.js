import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './components/Header.css';
import Home from './Home';
import About from './About';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/home" index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
