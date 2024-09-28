import React, { useEffect, useState } from 'react';
import "./Profile.css";

export default function Profile() {
    const [quizHistory, setQuizHistory] = useState([]);

    useEffect(() => {
        
        const history = [
            { id: 1, title: 'Quiz 1', score: 20 },
            { id: 2, title: 'Quiz 2', score: 30 },
        ];
        setQuizHistory(history);
    }, []);

    return (
        <div>
            <h1 className='titleH1'>Meu Perfil</h1>
            <h2>Histórico dos Quizzes:</h2>
            <ul>
                {quizHistory.map(quiz => (
                    <li key={quiz.id}>{quiz.title} - Pontuação: {quiz.score}</li>
                ))}
            </ul>
        </div>
    );
}
