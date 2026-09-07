import CustomCursor from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlowBackground from './components/UI/GlowBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-bg-dark text-text-light selection:bg-primary-blue/30 selection:text-white antialiased font-sans">
      {/* Interactive cursor effect */}
      <CustomCursor />
      
      {/* Scroll indicator */}
      <ScrollProgressBar />
      
      {/* Glowing backdrop elements */}
      <GlowBackground />
      
      {/* Navigation bar */}
      <Navbar />
      
      {/* Main sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
