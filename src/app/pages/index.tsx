import React, { useState } from 'react';
import { Button } from '../shared/components/Button';
import {useNavigate} from 'react-router-dom'


export const Index: React.FC = () => {
  const [inn, setInn] = useState(false);
  const navigate = useNavigate();

   const handleButtonIn = () => {
        setInn(true);

        setTimeout(() =>{
            navigate('/List')
        }, 1000);
    }

  return (
  <div className='welcoC'>
    {inn && <span className='welco'>process... ... ...</span>}

    {!inn && <div className='welcoC'>
    <h1 className='welco'>Welcome in my List</h1>
    <Button type='button' ClassN='buttonn' onClick={handleButtonIn} >Entrar</Button>
    </div>}    
  </div>
  )
}
