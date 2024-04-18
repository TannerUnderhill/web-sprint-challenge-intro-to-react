import React, { useState } from 'react'

export default function Character({name, planet}) { 
  // ❗ Add the props
  
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [toggleHomeWorld, setToggleHomeWorld] = useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const handleClick = () => {
    setToggleHomeWorld(!toggleHomeWorld); // Toggle the state variable
  }
  return (
    <div className='character-card' onClick={handleClick}>
      <h3 className='character-name'> {name} </h3>
      {toggleHomeWorld && (
        <p>
          <span className='character-planet'> Planet: {planet} </span>
        </p>
      )}
    </div>
  )
}