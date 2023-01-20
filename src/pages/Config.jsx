import React, { useEffect, useState } from 'react'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { useSelector, useDispatch } from 'react-redux';
import circlesr from '../assets/circlesr.png';
import circles from '../assets/circles.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { setThemeGlobal} from '../store/slices/theme.slice';
import { setRenderGlobal } from '../store/slices/render.slice';
import '../App.css';

const Config = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goBack = () => navigate(-1);
  const {theme} = useSelector(state => state);
  const {render} = useNavigate(state => state);

  useEffect(() => {
    if(theme === true) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  return (
    <>  
      <div className='pokedex__red'></div>
      <div className='pokedex__black'></div>
      <img className='pokedex__circles' src={circlesr} alt="" />
      <ArrowBackIcon  className='back__icon' onClick={goBack}/>
      <section className='config__section' >
        <SettingsBrightnessIcon sx={{ fontSize: 50 }} onClick={() => {dispatch(setThemeGlobal(!theme))}} style={{cursor: 'pointer'}}/>
        <div style={{fontWeight: 'bolder'}}>{theme ? 'Set Light Mode' : 'Set Dark Mode'}</div>
        {/* <h1>Nora Camacho</h1> */}
      </section>
      <img className='circle__img' src={circles} alt="cicle" />
      <div className='_red'></div>
      <div className='_black'></div>
    </>
  )
}

export default Config