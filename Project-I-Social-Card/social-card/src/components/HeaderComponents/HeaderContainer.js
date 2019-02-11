import React from 'react';
import './Header.css';
import HeaderActual from './HeaderActual';
import ImageThumbnail from './ImageThumbnail';


const HeaderContainer = () => {
    return (
      <div className="HeaderContainer">
        <ImageThumbnail />
        <HeaderActual />
      </div>
    );
  };

export default HeaderContainer;
