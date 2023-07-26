import React from 'react'

function Concept(props) {
  return (
    <div>
          <div>
            <li className='concept'>
                <img src={props.image} alt={props.title} />
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </li>
        </div>
    </div>
  )
}

export default Concept