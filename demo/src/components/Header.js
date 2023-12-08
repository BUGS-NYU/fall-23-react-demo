import React from 'react'
import './header.css'

function Header(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} font-xl`}>Header</h1>
        </div>
    )
}

export default Header