import './App.css';
import TituloPrincipal from './components/TituloPrincipal.js'
import Formulario from './components/Formulario.js'
import Pokemon from './components/Pokemon.js'
import ManejadorDeContexto from './context/ManejadorDeContexto.js';

function App() {
  return (
    <>
      <header>
        <TituloPrincipal></TituloPrincipal>
      </header>
      <main>
        <ManejadorDeContexto>
          <Formulario/>
          <section>
            <Pokemon/>
          </section>
        </ManejadorDeContexto>
      </main>
    </>
  );
}

export default App;
