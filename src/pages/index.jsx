import Navegador from "../components/Navegador";
import styles from "../styles/Home.module.css";

export default function Home() {
  return(
    <>
      <div className={styles.title}>
        <h1>Testes com NextJs + ReactJs</h1>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexWrap: 'wrap',
      }}>
        <Navegador title="Estiloso" destino="/estiloso" />
        <Navegador title="Exemple" destino="/exemple" color="blueviolet"/>
        <Navegador title="JSX" destino="/jsx" color="crimson"/>
        <Navegador title="Navegação 01" destino="/navegacao" color="green"/>
        <Navegador title="Navegação Dinâmica" destino="/cliente/sp/123" color="blue"/>
        <Navegador title="Componente com Estado" destino="/estado" color="#a45b71"/>
        <Navegador title="Integração com API #01" destino="/integracao_1" color="#42a9a9"/>
      </div>
    </>
  )
}
