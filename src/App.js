import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import Quizzes from './components/Quizzes';
import Profile from './components/Profile';
import "./App.css";

const API_KEY = 'de364c6ec7eb0295b35c7978d16c3bf7'; 
const BASE_URL = 'https://api.themoviedb.org/3';

export default function App() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
                setCategories(response.data.genres);
            } catch (error) {
                console.error('Erro na busca de categorias:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <Router>
            <nav className='menuNav'>
                <Link to="/">Home</Link>
                <Link to="/quizzes">Quizzes</Link>
                <Link to="/profile">Meu Perfil</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home categories={categories} />} />
                <Route path="/quizzes" element={<Quizzes />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
}
