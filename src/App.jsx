import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Parcours from './components/Parcours';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Parcours />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
