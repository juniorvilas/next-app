import Layout from '../components/Layout';
import { useState } from 'react';
import styles from '../styles/Integracao1.module.css'

export default function Integracao(){

    const [cliente, setCliente] = useState({});
    const [codigo, setCodigo] = useState(1);
    

    async function getCliente() {
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`);
        const dados = await resp.json();
        setCliente(dados);

       
    }

    return(
        <Layout title="Integração API 01">
            <div className={styles.container}>
                <input 
                    type="number" 
                    value={codigo} 
                    onChange={e => setCodigo(e.target.value)}
                />
                <button onClick={getCliente}>Obter Cliente</button>                
            </div>
            <ul className={styles.ul}>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>  
        </Layout>
    )
}