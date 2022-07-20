import Layout from '../components/Layout'
import { useState } from 'react';

export default function Estado(){
    const [number, setNumber] = useState(0);
    

    function increment(){
        setNumber(number + 1);

    }

    return (
        <Layout title="Componente com  Estado">
            <span>{number}</span>
            <button onClick={increment}>Incrementar</button>
        </Layout>
    )
}

//Next.JS e React: Curso Intensivo
//Cod3r Cursos  - 01:55:50 Usando API #1
//https://youtu.be/PHKaJlAeNLk?t=6952