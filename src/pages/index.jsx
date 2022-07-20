import Navegador from "../components/Navegador";

export default function Home() {
  return(
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
      <Navegador title="Componente com Estado" destino="/estado" color="pink"/>
    </div>
  )
}
