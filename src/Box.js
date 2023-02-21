import React from 'react'
const Box = ({ hexValue, color }) => {

    const style = {
        backgroundColor: color,
    }

    return (
        <div className="box" style={style} >
            <p>{color ? color : "Empty Value"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </div>
    )
}

export default Box
Box.defaultProps = {
    color: "Empty Color Value"
}