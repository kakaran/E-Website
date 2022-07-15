import HomePage from "./views/homepage/Homepage";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Login from "./views/login/Login";
import Product from "./views/product/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element = {<HomePage/>} />
          <Route exact path="/Login" element = {<Login/>} />
          <Route exact path="/Product" element ={<Product />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
