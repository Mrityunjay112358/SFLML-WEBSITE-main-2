import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Work from './components/Work';
import Team from './components/Team';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import PreloadAssets from './components/PreloadAssets';
import { useActiveSection } from './hooks/useActiveSection';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  const { activeSection, setActiveSection } = useActiveSection();
  useScrollAnimation();

  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add loading animation class removal
    const timer = setTimeout(() => {
      document.body.classList.add('loaded');
    }, 100);

    // Force hide cursor on every mousemove (workaround for browser/library bugs)
    const forceHideCursor = () => {
      document.body.style.cursor = 'none';
      document.documentElement.style.cursor = 'none';
    };
    window.addEventListener('mousemove', forceHideCursor, true);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', forceHideCursor, true);
    };
  }, []);

  return (
    <div className="App bg-black text-white cursor-none font-spartan">
      {/* Preload Assets */}
      <PreloadAssets />
      
      {/* Custom Cursor */}
      <CustomCursor />
      {/* Navigation */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Main Content */}
      <main className="relative cursor-none">
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Other Sections */}
        <Events />
        <Work />
        <Team />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
