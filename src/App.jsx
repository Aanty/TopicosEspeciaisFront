import MapaBrasil from './components/mapa/MapaBrasil';
import './App.css';

function App() {
  console.log('App carregado - versão mapa direto'); // Log para debug
  return (
    <div className="app">
      {/* Sempre mostrar o mapa diretamente */}
      <header className="app__header app__header--mapa">
        <h1>Wiki Brasil</h1>
        <p>Cadastro de animais brasileiros</p>
      </header>
      <MapaBrasil />
    </div>
  );
}

export default App;