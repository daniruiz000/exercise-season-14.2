import './App.css';
import Slides from './components/pages/Slides/Slides';
import Home from './components/pages/Home/Home';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
