import React from 'react';
import  "./Home.css";

export default function Home({ categories }) {
    return (
        <div>
            <h1 className='titleH1'>Nosso Quiz de Filmes</h1>
            <h2 className='titleH2'>Escolha sua categoria predileta:</h2>
            <ul className='listNoBullet'>
                {categories.map(category => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
}
