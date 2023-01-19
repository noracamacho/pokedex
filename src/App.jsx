import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import ProtectedRoutes from './components/ProtectedRoutes';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import PokedexId from './pages/PokedexId';

function App() {
  // const trainer = useSelector(state => state.trainer);
  // console.log(trainer);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />

        {/* Rutas protegidas */}
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<PokedexId />} />
          {/* <Route path='/pokedex/config' element={<Config />} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
