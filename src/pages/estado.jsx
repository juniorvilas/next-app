import Layout from '../components/Layout'
import { useState } from 'react';
import styles from '../styles/Estado.module.css';

export default function Estado(){
    const [number, setNumber] = useState(0);
    

    function increment(){
        setNumber(number + 1);
    }

    function decrement(){
        setNumber(number - 1);
    }

    return (
        <Layout title="Componente com  Estado">
            <div className={styles.number}>
                <span>{number}</span>
            </div>           
            
            <div className={styles.buttons}>
                <button 
                    className={styles.buttonIncrement}
                    onClick={increment}>
                        Incrementar
                </button>
                <button 
                    className={styles.buttonDecrement}
                    onClick={decrement}>
                        Decrementar
                </button>
                <button
                    className={styles.buttonReset} 
                    onClick={() => setNumber(0)}>
                        Zerar
                </button>
            </div>
            
        </Layout>
    )
}

