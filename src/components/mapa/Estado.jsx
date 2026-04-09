function Estado({ id, nome, path, cor, selecionado, onClick }) {
  return (
    <path
      d={path}
      id={id}
      className={`estado ${selecionado ? 'estado--selecionado' : ''}`}
      style={{ fill: cor }}
      onClick={() => onClick(id, nome)}
      aria-label={nome}
    >
      <title>{nome}</title>
    </path>
  );
}

export default Estado;
