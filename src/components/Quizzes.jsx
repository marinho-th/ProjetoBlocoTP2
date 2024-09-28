import React, { useState } from 'react';
import "./Quizzes.css";
export default function Quizzes() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [movies, setMovies] = useState([]);

    const fetchMoviesByCategory = async (categoryId) => {
        
    };

    const handleCategorySelect = async (categoryId) => {
        setSelectedCategory(categoryId);
        const movies = await fetchMoviesByCategory(categoryId);
        setMovies(movies);
    };

    return (
        <div>
            <h1 className='titleH1'>Espaço dos Quizzes</h1>
            <button onClick={() => handleCategorySelect(28)}>Ação</button>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}
