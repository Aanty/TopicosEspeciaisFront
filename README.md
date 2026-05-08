# 🇧🇷 Wiki Brasil - Cadastro de Animais Brasileiros

Uma aplicação web interativa para catalogar e visualizar a fauna brasileira através de um mapa dinâmico do Brasil.

## 📋 Sobre o Projeto

O **Wiki Brasil** é uma plataforma desenvolvida em React que permite o cadastro, visualização e gerenciamento de animais nativos do Brasil. A aplicação apresenta um mapa interativo onde os usuários podem explorar a biodiversidade por estado e contribuir com informações sobre a fauna brasileira.

## ✨ Funcionalidades

### 🗺️ **Mapa Interativo**
- Mapa do Brasil com todos os 26 estados + Distrito Federal
- Cores diferenciadas por região (Norte, Nordeste, Centro-Oeste, Sudeste, Sul)
- Indicadores visuais mostrando estados com animais cadastrados
- Hover effects com informações dinâmicas

### 🐾 **Gestão de Animais**
- **Cadastro de animais** por estado
- **Edição** de informações existentes
- **Exclusão** de registros
- **Preview de imagens** durante o cadastro
- **Validação de formulários** com feedback visual

### 📱 **Interface Responsiva**
- Layout de 3 colunas: Animais do Estado | Mapa | Todos os Animais
- **Animais do Estado**: Mostra animais do estado em hover
- **Mapa Central**: Navegação principal
- **Lista Completa**: Todos os animais cadastrados
- Design adaptável para desktop e mobile

### 🎨 **Experiência Visual**
- **Fundo oceano animado** com gradientes azuis
- **Cards interativos** com efeitos de hover
- **Preview de imagens** em tempo real
- **Indicadores visuais** de quantidade por estado

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca principal
- **Vite** - Build tool e dev server
- **CSS3** - Estilização com animações
- **JavaScript ES6+** - Lógica da aplicação

### Backend Integration
- **REST API** - Comunicação com backend .NET
- **Fetch API** - Requisições HTTP
- **JSON** - Formato de dados

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn
- Backend API rodando (porta 5085)

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/wiki-brasil.git
cd wiki-brasil
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
# Crie um arquivo .env na raiz do projeto
VITE_API_URL=http://localhost:5085
```

4. **Execute a aplicação**
```bash
npm run dev
```

5. **Acesse no navegador**
```
http://localhost:5173
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── mapa/
│   │   ├── MapaBrasil.jsx      # Componente principal do mapa
│   │   └── MapaBrasil.css      # Estilos do mapa
│   ├── Modal.jsx               # Modal para formulários
│   └── ...
├── services/
│   └── api.js                  # Configurações da API
├── App.jsx                     # Componente raiz
├── index.css                   # Estilos globais
└── main.jsx                    # Ponto de entrada
```

## 🎯 Funcionalidades Detalhadas

### Cadastro de Animais
- **Método 1**: Clique diretamente no estado no mapa
- **Método 2**: Use o botão flutuante "+" (canto inferior direito)
- **Campos**: Nome, Nome Científico, Descrição, URL da Imagem
- **Preview**: Visualização da imagem em tempo real
- **Validação**: Campos obrigatórios e formato de URL

### Navegação por Estados
- **Hover no mapa**: Mostra animais do estado na coluna esquerda
- **Clique no estado**: Abre modal de cadastro
- **Indicadores visuais**: Pontos verdes mostram estados com animais

### Gerenciamento
- **Editar**: Clique em qualquer card de animal
- **Excluir**: Botão "X" vermelho (aparece no hover)
- **Filtros visuais**: Destaque de animais por estado

## 🎨 Design System

### Cores
- **Azul Escuro**: `#0b3d91` - Elementos principais
- **Azul Médio**: `#1e5aa8` - Backgrounds
- **Azul Claro**: `#4facfe` - Destaques
- **Verde**: `#4CAF50` - Indicadores de sucesso

### Animações
- **Fundo oceano**: Gradiente animado (15s loop)
- **Hover effects**: Transformações suaves
- **Loading states**: Feedback visual durante carregamento

## 🔧 Configuração da API

A aplicação espera uma API REST com os seguintes endpoints:

```
GET    /api/estados     # Lista todos os estados
GET    /api/animais     # Lista todos os animais
POST   /api/animais     # Cria novo animal
PUT    /api/animais/:id # Atualiza animal
DELETE /api/animais/:id # Remove animal
```

### Formato dos Dados

**Estado**:
```json
{
  
  "Id": 1,
  "Nome": "São Paulo",
  "Sigla": "SP"
}
```

**Animal**:
```json
{
  "Id": 1,
  "Nome": "Onça-pintada",
  "NomeCientifico": "Panthera onca",
  "Descricao": "Maior felino das Américas",
  "UrlImagem": "https://exemplo.com/onca.jpg",
  "EstadoId": "1"
}
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **Seu Nome** - *Desenvolvimento inicial* - [SeuGitHub](https://github.com/seu-usuario)

## 🙏 Agradecimentos

- Dados geográficos do Brasil
- Comunidade React
- Contribuidores do projeto

---

⭐ **Gostou do projeto? Deixe uma estrela!** ⭐