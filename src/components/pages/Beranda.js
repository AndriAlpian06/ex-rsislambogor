import App from '../../App.css';
import Navbar from '../Navbar';
import Hero from '../Hero';
import SideBar from '../SideBar';
import Service from '../Service';
import Notice from '../Notice';
import Article from '../Article';
import ServiceOnline from '../ServiceOnline';
import BackToUp from '../BackToUp';
import Footer from '../Footer';

function Beranda() {
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

export default Beranda;
