import React from 'react';
import ConseptsItem from './ConseptsItem';

function Concepts(props) {
    return (
        <div>
            <ul id='concepts'>
                <ConseptsItem concept={props.ConceptsInfo[0]} />
                <ConseptsItem concept={props.ConceptsInfo[1]} />
                <ConseptsItem concept={props.ConceptsInfo[2]} />
            </ul>
        </div>
    );
}

export default Concepts;
