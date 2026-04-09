import { useState } from 'react';
import MapaBrasil from './MapaBrasil';
import ListaAnimais from './ListaAnimais';
import FormularioAnimal from './FormularioAnimal';
import { buscarAnimaisPorEstado, criarAnimal } from '../../services/estadoService';
import './MapaBrasil.css';

function PaginaMapa() {
  const [estadoId, setEstadoId] = useState(null);
  const [estadoNome, setEstadoNome] = useState('');
  const [animais, setAnimais] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleEstadoClick = async (id, nome) => {
    setEstadoId(id);
    setEstadoNome(nome);
    setAnimais([]);
    setLoading(true);

    try {
      const data = await buscarAnimaisPorEstado(id);
      setAnimais(data);
    } catch (err) {
      console.error(err);
      setAnimais([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAnimalCriado = async (dadosAnimal) => {
    try {
      await criarAnimal(dadosAnimal);
      // Atualizar lista de animais após criar
      const data = await buscarAnimaisPorEstado(estadoId);
      setAnimais(data);
    } catch (err) {
      console.error('Erro detalhado ao criar animal:', err);
      throw err; // Re-throw para o FormularioAnimal mostrar o erro
    }
  };

  return (
    <div className="mapa-pagina">
      <p className="mapa-pagina__titulo">
        Clique em um estado para ver os animais da região
      </p>
      <div className="mapa-layout">
        <div className="mapa-oceano">
          <MapaBrasil onEstadoClick={handleEstadoClick} />
        </div>
        <ListaAnimais
          estadoNome={estadoNome}
          animais={animais}
          loading={loading}
        />
      </div>
      <FormularioAnimal
        estadoId={estadoId}
        estadoNome={estadoNome}
        onAnimalCriado={handleAnimalCriado}
      />
    </div>
  );
}

export default PaginaMapa;
