import './App.css';
import Slides from './components/pages/Slides/Slides';
import Home from './components/pages/Home/Home';
import { Routes, Route, Link, HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <h1>Hola amigos</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/slides'>Slides</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/slides' element={<Slides />}></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
