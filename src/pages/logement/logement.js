import React from 'react';
import {useParams} from "react-router-dom";
import Slideshow from '../../components/slideshow/slideshow';

export  function Logement() {
    const {id} = useParams();
  return (
    <div className='main-logement'>
        <Slideshow />
        
    </div>
  )
}
