import './App.css';
import Article from './components/Article';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Notice from './components/Notice';
import Service from './components/Service';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Notice />
      <Article />
      <Service />
      <Footer />
    </>
  );
}

export default App;
