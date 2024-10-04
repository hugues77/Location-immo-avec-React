// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './card.scss';
import Logements from '../../data/logements.json';
import { useEffect } from 'react';

export default function Card() {
    


    useEffect( () =>{
        // console.log({Appart});
    }, [])
    // const [Appart, setAppart] = useState([]);

    return (
        <>
            <div className="logements">
                {
                    Logements.map( (appart) =>(
                        <div className='card' key={appart.id}>
                            <Link to={"/logement/" + appart.id}>
                                <img src={appart.cover} alt="card image1" />
                                <span>{appart.title} </span>
                            </Link>

                        </div>
                    ) )
                }
                {/* <div className='card'>
                    <img src={Elephant2} alt="card image1" />
                    <span>Titre de la location</span>

                </div>
                <div className='card'>
                    <img src={Elephant} alt="card image1" />
                    <span>Titre de la location</span>

                </div>
                <div className='card'>
                    <img src={Elephant} alt="card image1" />
                    <span>Titre de la location</span>

                </div>
                <div className='card'>
                    <img src={Elephant} alt="card image1" />
                    <span>Titre de la location</span>

                </div>
                <div className='card'>
                    <img src={Elephant} alt="card image1" />
                    <span>Titre de la location</span>

                </div> */}
            </div>
        </>
    )
}
