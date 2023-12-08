import React from 'react'
import './portrait.css'

function Portrait(props) {
    return (
        <div className="portrait" 
        style={{
            height: props.height,
            width: props.width,
        }}>
            <img className="image" src={props.img} width='100%' />
            <p className="p" style={{width: props.textWidth}}>{props.text}</p>
        </div>
    )
}

export default Portrait