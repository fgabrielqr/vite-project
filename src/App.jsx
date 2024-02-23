import { Cabecalho, Conteudo, Footer } from './components';
import { Inicial } from './pages';

import './App.css'


const App = () => {
  return (
    <>
      <Cabecalho nomeUsuario="Felipe" />
      <Conteudo>
        <Inicial />
      </Conteudo>
      <Footer nomeCriador="Felipe Gabriel" />
    </>
  )
}

export { App };
