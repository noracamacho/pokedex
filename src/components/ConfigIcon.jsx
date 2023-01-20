import React from 'react'
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import { useNavigate } from 'react-router-dom';

const ConfigIcon = () => {
   const navigate = useNavigate();
    return (
        <>  
            <div className='settingsIcon' onClick={() => navigate('/config')}>
                <SettingsSharpIcon sx={{ fontSize: 40 }}/>
            </div>
        </>
    )
}

export default ConfigIcon