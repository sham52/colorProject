import React from 'react'
import colors from 'colornames'
const Input = ({ setHexValue, color, setColor }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted")
    }

    const handleChange = (e) => {
        setColor(e.target.value);
        setHexValue(colors(e.target.value));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label style={{ display: 'none' }} >Add Color Name:</label>
            <input
                autoFocus
                tabIndex={0}
                type="text"
                required
                placeholder="Add color name"
                className='input'
                value={color}
                onChange={handleChange}
            />

        </form>
    )
}

export default Input