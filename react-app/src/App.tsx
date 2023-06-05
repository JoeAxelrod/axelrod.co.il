import React, {Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import NavBar from './components/layouts/NavBar';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactUs from "./components/pages/ContactUs";
import Layout from './components/layouts/Layout';
import SnakeGame from "./components/pages/SnakeGame";

const App: React.FC = () => {
    return (
        <Router>
            <CssBaseline />
            <NavBar />

            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/snake-ai" element={<SnakeGame />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
