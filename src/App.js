import './App.css';
import Beranda from './components/pages/Beranda'
import JadwalDokter from './components/pages/JadwalDokter'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Beranda />}></Route>
        <Route path='JadwalDokter' element={<JadwalDokter />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
