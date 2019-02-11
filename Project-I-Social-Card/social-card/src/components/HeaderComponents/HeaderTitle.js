import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
      <div className="HeaderTitle">
       <p className="title"> Lambda School</p>
       <div className= "light">
       <p > @LambdaSchool &bull; 26 jan</p>
       </div>
      </div>
    );
  };

export default HeaderTitle;