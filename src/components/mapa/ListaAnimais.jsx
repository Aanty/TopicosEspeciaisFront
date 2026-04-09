function AnimalCard({ animal }) {
  return (
    <div className="animal-card">
      {animal.imagemUrl ? (
        <img
          className="animal-card__imagem"
          src={animal.imagemUrl}
          alt={animal.nome}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
      ) : null}
      <div
        className="animal-card__imagem-placeholder"
        style={{ display: animal.imagemUrl ? 'none' : 'flex' }}
      >
        🐾
      </div>
      <div className="animal-card__info">
        <p className="animal-card__nome">{animal.nome}</p>
        {animal.nomeCientifico && (
          <p className="animal-card__cientifico">{animal.nomeCientifico}</p>
        )}
        {animal.descricao && (
          <p className="animal-card__descricao">{animal.descricao}</p>
        )}
      </div>
    </div>
  );
}

function ListaAnimais({ estadoNome, animais, loading }) {
  const renderCorpo = () => {
    if (!estadoNome) {
      return (
        <div className="lista-animais__placeholder">
          <span>🗺️</span>
          <p>Selecione um estado no mapa para ver os animais da região</p>
        </div>
      );
    }

    if (loading) {
      return (
        <div className="lista-animais__loading">
          <div className="lista-animais__spinner" />
          <p>Buscando animais...</p>
        </div>
      );
    }

    if (!animais || animais.length === 0) {
      return (
        <div className="lista-animais__vazio">
          <span>🔍</span>
          <p>Nenhum animal cadastrado para {estadoNome}</p>
        </div>
      );
    }

    return animais.map((animal) => (
      <AnimalCard key={animal.id ?? animal.nome} animal={animal} />
    ));
  };

  return (
    <div className="lista-animais">
      <div className="lista-animais__header">
        <h3>{estadoNome || 'Animais'}</h3>
        {animais && animais.length > 0 && (
          <span>{animais.length} animal(is) encontrado(s)</span>
        )}
      </div>
      <div className="lista-animais__body">{renderCorpo()}</div>
    </div>
  );
}

export default ListaAnimais;
