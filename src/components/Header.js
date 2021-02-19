import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button';
const Header = ({name}) => {
  return (
    <header class="header">
      <div class="nav-user">
        <div class="user-info">
          <h4 class="user-name">{name}</h4>
        </div>
        <div class="user-image">
         
          <img
            src="https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
            alt="Add"
          />
        </div>
         < Button color='green' text='ADD' onClick={() => { console.log('Clicked') }}/>
      </div>
    </header>
  );
};
Header.defaultProps = {
    title: 'TASK TRACKER'
}
Header.propType = {
    title: PropTypes.string
}
export default Header;
