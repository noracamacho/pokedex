import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTrainerGlobal} from '../store/slices/trainer.slice'
import '../App.css';
import circles from '../assets/circles.png'
import Footer from '../components/Footer';

const Home = () => {
    // const [ theme, setTheme ] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(setTrainerGlobal(e.target.name.value.trim()));
        e.target.name.value = '';
        navigate('/pokedex');
    }

  return (
    <div className='home__page'>
        <img className='home__img' src="/Home/pokedex.png" alt="pokedex" />
        <h1 className='home__title'>Hi Trainer!</h1>
        <p className='home__p'>Give me your name to start</p>
        <form className='home__input__section' onSubmit={handleSubmit}>
            <input id='name' type="text" placeholder='Your name . . .' />
            <button className='home__button'>Start</button>
        </form>
        <div className='footer__section'>
          <img className='circle__img' src={circles} alt="cicle" />
          <div className='_red'></div>
          <div className='_black'></div>
        </div>
        <Footer />
    </div>
  )
}

export default Home