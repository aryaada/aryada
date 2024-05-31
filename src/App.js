import style from './assets/css/all.css';
import Sidebar from './components/sidebar/Sidebar';
import Beranda from './components/beranda/Beranda';
import Tentang from './components/tentang/Tentang';
import Keahlian from './components/keahlian/Keahlian';
import Pendidikan from './components/pendidikan/Pendidikan';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <>
    <Sidebar />
    <main className={style.main}>
      <Beranda />
      <Tentang />
      <Keahlian />
      <Pendidikan />
      <Portfolio />
    </main>
    </>
  );
}

export default App;
