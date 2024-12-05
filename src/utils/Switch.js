import React from 'react';
import styled from 'styled-components';

const Switch = ({ onChange, checked }) => {
  return (
    <StyledWrapper>
      <div className="toggle-wrapper">
        <input 
          className="toggle-checkbox" 
          type="checkbox"
          onChange={onChange}
          checked={checked}
        />
        <div className="toggle-container">  
          <div className="toggle-button">
            <div className="toggle-button-circles-container">
              <div className="toggle-button-circle" />
              <div className="toggle-button-circle" />
              <div className="toggle-button-circle" />
              <div className="toggle-button-circle" />
              <div className="toggle-button-circle" />
              <div className="toggle-button-circle" />
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div`
  .toggle-wrapper {
    font-size: 0.75rem;  
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: .5em;
    padding: .125em;
    background-image: linear-gradient(to bottom, #d5d5d5, #e8e8e8);
  }

  .toggle-container {
    display: flex;
    align-items: center;
    position: relative;
    border-radius: .375em;
    width: 2.5em;
    height: 1.25em;
    background-color: #e8e8e8;
    box-shadow: inset 0 0 .0625em .125em rgb(255 255 255 / .2), inset 0 .0625em .125em rgb(0 0 0 / .4);
    transition: background-color .4s linear;
  }

  .toggle-checkbox {
    appearance: none;
    position: absolute;
    z-index: 1;
    border-radius: inherit;
    width: 100%;
    height: 100%;
    font: inherit;
    opacity: 0;
    cursor: pointer;
  }

  .toggle-checkbox:checked + .toggle-container {
    background-color: #f3b519;
  }

  .toggle-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: .0625em;
    border-radius: .3125em;
    width: 1.125em;
    height: 1.125em;
    background-color: #e8e8e8;
    box-shadow: inset 0 -.0625em .0625em .125em rgb(0 0 0 / .1), 
                inset 0 -.125em .0625em rgb(0 0 0 / .2), 
                inset 0 .1875em .0625em rgb(255 255 255 / .3), 
                0 .125em .125em rgb(0 0 0 / .5);
    transition: left .4s;
  }

  .toggle-checkbox:checked + .toggle-container > .toggle-button {
    left: 1.375em;
  }
`;

export default Switch;