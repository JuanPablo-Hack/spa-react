import './assets/css/base/base.css';
import './assets/css/componentes/card.css';
import Categoria from './components/Categorias';
import NavBar from './components/NavBar';
import Post from './components/Post';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Sobre from './pages/Sobre';
import {
  Route,
  BrowserRouter as Router, Routes
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
        <Route path="posts/:id" element={<Post />} />
        <Route path="/categoria/:id/*" element={<Categoria />} />
      </Routes>
    </Router>
  );
}

export default App;
