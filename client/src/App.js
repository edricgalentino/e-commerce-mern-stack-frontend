import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Pay from "./pages/Pay";
import PaymentSuccess from "./pages/PaymentSuccess";

function App() {
    return (
        <div className="App overflow-hidden transition-all font-main">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/list-product" element={<ProductList />} />
                    <Route path="/detail-product" element={<ProductDetail />} />
                    <Route path="/payment/checkout" element={<Pay />} />
                    <Route path="/payment/success" element={<PaymentSuccess />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
