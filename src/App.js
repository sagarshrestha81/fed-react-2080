import Home from "./pages/Homepage";
import 'bootstrap/dist/css/bootstrap.css';
import "./css/style.css";
import AboutUs from "./pages/AboutUs";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import PageNotFound from "./pages/404";
function App() {
  return (
    <Router>
      <Routes>    
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutUs/>}/> 
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;
