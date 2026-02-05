
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-sans selection:bg-violet-200 dark:selection:bg-violet-900/50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
