import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Resume from './components/resume/Resumo';
import Servicos from './components/servicos/Servicos';
import Skills from './components/skills/Skills';
import Projetos from './components/projetos/Projetos';
import Historia from './components/historia/Historia';
import Work from './components/work/Work';
import Rodape from './components/rodape/Rodape';



function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Resume/>
      <Servicos/>
      <Skills/>
      <Projetos/>
      <Historia/>
      <Work/>
      <Rodape/>
    </>
  );
}

export default App;
