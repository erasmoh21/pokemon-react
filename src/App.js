import './App.css';
import TituloPrincipal from './components/TituloPrincipal.js'
import Formulario from './components/Formulario.js'
import Pokemon from './components/Pokemon.js'

function App() {
  console.log(document.getElementById('formulario').value)
  return (
    <>
      <header>
        <TituloPrincipal></TituloPrincipal>
      </header>
      <main>
        <Formulario></Formulario>
        <section>
          <Pokemon></Pokemon>
        </section>
      </main>
    </>
  );
}

export default App;
