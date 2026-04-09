import { useState } from 'react';
import './FormularioAnimal.css';

function FormularioAnimal({ estadoId, estadoNome, onAnimalCriado }) {
  const [formData, setFormData] = useState({
    nome: '',
    nomeCientifico: '',
    descricao: '',
    urlImagem: '',
  });
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (erro) setErro('');
    if (sucesso) setSucesso(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação
    if (!formData.nome.trim() || !formData.nomeCientifico.trim()) {
      setErro('Nome e nome científico são obrigatórios');
      return;
    }

    setLoading(true);
    setErro('');

    try {
      const dadosAnimal = {
        ...formData,
        estadoId,
      };

      await onAnimalCriado(dadosAnimal);
      
      // Limpar formulário
      setFormData({
        nome: '',
        nomeCientifico: '',
        descricao: '',
        urlImagem: '',
      });
      
      setSucesso(true);
      setTimeout(() => setSucesso(false), 3000);
    } catch (err) {
      setErro('Erro ao cadastrar animal. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  if (!estadoId) return null;

  return (
    <div className="formulario-animal">
      <div className="formulario-animal__header">
        <h3>Adicionar animal para {estadoNome}</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="formulario-animal__form">
        <div className="formulario-animal__campo">
          <label htmlFor="nome">Nome *</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Ex: Onça-pintada"
            disabled={loading}
            required
          />
        </div>

        <div className="formulario-animal__campo">
          <label htmlFor="nomeCientifico">Nome científico *</label>
          <input
            type="text"
            id="nomeCientifico"
            name="nomeCientifico"
            value={formData.nomeCientifico}
            onChange={handleChange}
            placeholder="Ex: Panthera onca"
            disabled={loading}
            required
          />
        </div>

        <div className="formulario-animal__campo">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            placeholder="Descreva características do animal..."
            rows="3"
            disabled={loading}
          />
        </div>

        <div className="formulario-animal__campo">
          <label htmlFor="urlImagem">URL da imagem</label>
          <input
            type="url"
            id="urlImagem"
            name="urlImagem"
            value={formData.urlImagem}
            onChange={handleChange}
            placeholder="https://exemplo.com/imagem.jpg"
            disabled={loading}
          />
        </div>

        {erro && (
          <div className="formulario-animal__erro">
            {erro}
          </div>
        )}

        {sucesso && (
          <div className="formulario-animal__sucesso">
            Animal cadastrado com sucesso!
          </div>
        )}

        <button
          type="submit"
          className="formulario-animal__botao"
          disabled={loading}
        >
          {loading ? 'Cadastrando...' : 'Adicionar Animal'}
        </button>
      </form>
    </div>
  );
}

export default FormularioAnimal;