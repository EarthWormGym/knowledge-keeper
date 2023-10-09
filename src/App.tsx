import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LibraryPage from './Pages/LibraryPage';
import LoginPage from './Pages/LoginPage';
import Navbar from './Navbar';

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/library" element={<LibraryPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
