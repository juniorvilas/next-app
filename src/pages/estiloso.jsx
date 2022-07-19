import styles from '../styles/Estiloso.module.css';
import Layout from '../components/Layout'

export default function Estiloso(){
    return(
        <Layout title="Estiloso">
            <div className={styles.roxo}>            
                <h1>Estilo usando CSS Módulos</h1>
            </div>
        </Layout>
       
    )
}




//Next.JS e React: Curso Intensivo - Masterclass #01 [2021]
//1:20:30 Componente Navegador / 2:46:34
//https://youtu.be/PHKaJlAeNLk?t=4830