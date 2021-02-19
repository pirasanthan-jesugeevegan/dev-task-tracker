import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../assets/checklist.svg';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
const Header = ({ name, showAdd, onAdd }) => {
  return (
    <header class="header">
      <div class="nav-header">
        <span></span>
        <span onClick={onAdd}>{
          showAdd ? <IoMdRemove style={{color:'red',cursor: 'pointer'}} onClick={onAdd}/> : <IoMdAdd style={{color:'green',cursor: 'pointer'}} onClick={onAdd}/>
        }
        </span>
      </div>
      <div class="nav-user">
         <div class="user-image">
          <img src={Logo} alt="React Logo" />
        </div>
        <div class="user-info">
          <h4 class="user-name">{name}</h4>
        </div>
       
      </div>
    </header>
  );
};
Header.defaultProps = {
  name: 'TASK TRACKER',
};
Header.propType = {
  name: PropTypes.string,
};
export default Header;
