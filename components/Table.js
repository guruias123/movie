import React from 'react'
import './Table.css'

function Table() {
    return (
        <div className='menu'>
            <input type="text" placeholder='Playlist Name*' />
            <input type="text" placeholder='Playlist Name*' />
            <button>* Create Playlist</button>
        </div>
    )
}

export default Table