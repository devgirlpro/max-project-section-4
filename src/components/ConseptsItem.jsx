import React from 'react';

function ConseptsItem(props) {
    return (
        <li className='concept'>
            <img src={props.concept.image} alt={props.concept.title} />
            <h2>TODO: {props.concept.title}</h2>
            <p>TODO: {props.concept.description}</p>
        </li>
    );
}

export default ConseptsItem;
