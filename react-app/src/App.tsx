import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

// Layout Components
import NavBar from './components/layouts/NavBar';
import Layout from './components/layouts/Layout';

// Pages
import HomePage from './components/pages/HomePage';
import ApibotPage from './components/pages/ApibotPage';
import SnakeGame from "./components/pages/SnakeGame";
import ChatPage from "./components/pages/ChatPage";
import ContactUs from "./components/pages/ContactUs";
import MinimaxTicTacToe from "./components/pages/MinimaxTicTacToe"; // import MinimaxTicTacToe component
import MinimaxChess from "./components/pages/MinimaxChess"; // import MinimaxChess component

const App: FC = () => {
    return (
        <Router>
            <CssBaseline />
            <NavBar />

            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/api-bot" element={<ApibotPage />} />
                    <Route path="/snake-ai" element={<SnakeGame />} />
                    <Route path="/prompt" element={<ChatPage />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/minimax-tictactoe" element={<MinimaxTicTacToe />} /> {/* Add MinimaxTicTacToe route */}
                    <Route path="/minimax-chess" element={<MinimaxChess />} /> {/* Add MinimaxChess route */}
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
