// Major components
// import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Title from "./components/Title.tsx";
import Navbar from "./components/Navbar.tsx";

// CSS
import './App.css'

// Pages
import Books from "./pages/Books.tsx";
import Home from "./pages/Home.tsx";

function App() {
    return (
        <>
            <div className="default">
                <Title />
                <Navbar />

                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/books" element={<Books />} />
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;