import React from 'react'

const ToggleDark = ({setIsDark,isDark}) => {

    const handleClick = () => {
            setIsDark(!isDark)
    }

    return (
        <button className="toggle" onClick={handleClick}>Toggle Dark Text</button>
    )
}

export default ToggleDark