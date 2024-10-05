import React, { children } from 'react';
import './collapse.scss';
import ArrowBack from '../../img/arrow_back.png';

export default function Collapse(props) {
  return (
    <div className='main-collapse'>
        <div className="head">
            <p className='title'>{props.title} </p>
            <span><img src= {ArrowBack} alt="ouverture / fermeture collapse" /></span>
        </div>
        <div className='collapse-content'>{props.children}</div>
    </div>
  )
}
