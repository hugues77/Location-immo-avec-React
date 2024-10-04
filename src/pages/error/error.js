import React from 'react';
import { Link } from 'react-router-dom';
import "./error.scss";

export default function Error() {
  return (
    <main className='error'>
        <h1 className="title-404">404</h1>
        <div className='sub-title'>Oups! La page que vous demandez n'existe pas</div>
        <span><Link to= "/">Retourner sur la page d'accueil</Link></span>
    </main>
  )
}
