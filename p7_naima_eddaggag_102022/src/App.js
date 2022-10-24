import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Product from "./components/product/product";
import Cart from "./components/cart/cart";
import About from "./components/about/about";
import Error from "./components/error/error";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

function App() {
	return (
		<div className="App">
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/product" element={<Product />} />
				<Route path="/error" element={<Error />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
