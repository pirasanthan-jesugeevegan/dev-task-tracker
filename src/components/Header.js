import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../assets/checklist.svg';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';

const Header = ({ name, showAdd, onAdd }) => {
  return (
    <header className="header">
      <div className="nav-header">
        <span></span>
        <span onClick={onAdd}>
          {showAdd ? (
            <IoMdRemove
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={onAdd}
            />
          ) : (
            <IoMdAdd
              style={{ color: 'green', cursor: 'pointer' }}
              onClick={onAdd}
            />
          )}
        </span>
      </div>
      <div className="nav-user">
        <div className="user-image">
          <img src={Logo} alt="React Logo" />
        </div>
        <div className="user-info">
          <h4 className="user-name">{name}</h4>
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
