import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CircleMenuButton.css';

const CircleMenuButton = ({icon, label, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  }

  return (
    <button onClick={handleClick} className='CircleMenuButton'>
      <img src={icon} alt={label} />
      <p>{label}</p>
    </button>
  );
}

export default CircleMenuButton;