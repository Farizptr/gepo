import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Legality from './components/sections/Legality';
import Projects from './components/sections/Projects';
import Comments from './components/sections/Comments';
import Footer from './components/sections/Footer';
import Product from './components/sections/Product';

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main className="pt-16"> {/* Added padding-top to account for fixed navbar */}
        <Hero />
        <About />
        <Product/>
        <Legality />
        <Projects />
        <Comments />
      </main>
      <Footer />
    </div>
  );
}

export default App;
