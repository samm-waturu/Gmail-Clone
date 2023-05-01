import React from 'react';
import '../components-styles/sideOption.css'

function SideOption({Icon, title, number, selected}) {
  return (
    <div className={`sidebar_options ${selected && 'sidebar_options--active'} `}>
      <Icon />
      <h5>{title}</h5>
      <p>{number}</p>
    </div>
  );
}

export default SideOption;
