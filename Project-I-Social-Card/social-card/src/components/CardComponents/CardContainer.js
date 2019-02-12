import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardActual from './CardActual';


const CardContainer = () => {
    return (
      <a href="https://www.reactjs.org" target="_blank" className="CardContainer">
        <CardBanner />
        <CardActual />
      </a>
    );
  };



export default CardContainer;
