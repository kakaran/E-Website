import Navbared from "./components/navbar/Navbared"
import HomePage from "./views/homepage/Homepage";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbared />
      <HomePage/>
    </div>
  );
}

export default App;
