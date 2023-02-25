import React, { useState } from 'react'

function ColorChange() {
    const colors = ["red", "blue", "green", "yellow"]
    const [first, setFirst] = useState(0)
    setInterval(() => {
        setFirst(Math.floor((Math.random() * 3) + 0))
        return Math.floor((Math.random() * 3) + 0)
    }, 5000);
    return (
        <div style={{ backgroundColor: colors[first] }}>Hi</div>
    )
}

export default ColorChange