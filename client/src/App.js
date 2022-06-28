import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
// import react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
    return (
        <div className="App overflow-hidden transition-all font-main">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
