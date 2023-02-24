import React from 'react'

const Box = ({ isDark, hexValue, color }) => {



    const style = {
        backgroundColor: color,
        color: isDark ? "#000" : "#FFF"
    }

    return (
        <div className="box" style={style} >
            <p>{color ? color.toUpperCase() : "Empty Value"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </div>
    )
}

export default Box
Box.defaultProps = {
    color: "Empty Color Value"
}