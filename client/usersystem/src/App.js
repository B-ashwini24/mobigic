
import './App.css';
import { Route, Routes } from "react-router-dom";
// import Home from './components/Home';
// import About from './components/About';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import 'antd/dist/antd.css';
import Fileupload from './components/Fileupload';
import Show from './components/Show';

function App() {
  return (
    <div className="App">
 <Navbar/>
 <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} /> */}
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Fileupload" element={<Fileupload/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/show" element={<Show/>} />
      </Routes>
    </div>
  );
}

export default App;
