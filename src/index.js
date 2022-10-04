import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from "react-router-dom";

import TopNavbar from "./components/topNavbar/index";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<TopNavbar/>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/about" element={<About/>}/>
				<Route path="/contact" element={<Contact/>}/>
			</Routes>
			<Footer/>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
