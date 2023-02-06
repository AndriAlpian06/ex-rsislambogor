import './App.css';
import Article from './components/Article';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Notice from './components/Notice';
import Service from './components/Service';
import ServiceOnline from './components/ServiceOnline';
import BackToUp from './components/BackToUp';
import SideBar from './components/SideBar'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SideBar />
      <Service />
      <Notice />
      <Article />
      <ServiceOnline />
      <BackToUp />
      <Footer />
    </>
  );
}

export default App;
