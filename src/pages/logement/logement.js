import React from 'react';
import {useParams} from "react-router-dom";

export  function Logement() {
    const {id} = useParams();
  return (
    <div className='main-logement'>
        <h1>Bienvenue dans mon logement Kasa:  {id} </h1>
        
    </div>
  )
}
