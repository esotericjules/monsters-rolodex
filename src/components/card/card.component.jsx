import React from "react";
import './card.styles.css'

export const Card = (props) => {
    return (
            <div className={'card-container'}>
                <img
                    alt={'monster'}
                    src={`https://robohash.org/${props.monster.id}?set=set2?size=80*100`}/>
                <h1>{props.monster.name}</h1>
                <h1>{props.monster.email}</h1>
            </div>
        )

};