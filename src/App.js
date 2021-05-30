import './App.css';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
import Hero from './Component/Hero/Hero';
import Menu from './Component/Menu/Menu';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

export default App;
