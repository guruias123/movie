import React, { useState } from 'react'
import './Hooked.css'
function Hooked({ hookedMovies, moviename }) {
    const [first, setFirst] = useState(hookedMovies)

    const filter = (event) => {
        event.preventDefault()
        const text = event.target.value
        const results = hookedMovies.filter(post => {
            if (event.target.value === "") return hookedMovies
            return post.title.toLowerCase().includes(event.target.value.toLowerCase())
        })
       setFirst(results)

    }

    return (
        <div>
            <div className='hooked'>
                <h1>HOOKED</h1>
            </div>

            <div>
                <input style={{ width: '300px', marginRight: '5px' }} type='text' onChange={filter} />
                <button >SEARCH</button>
            </div>
            <div>
                <h5 style={{ marginTop: '10px' }}>Sharing a few of our favourate movies</h5>
            </div>
            {/* <h1>{moviename}</h1> */}
            <div className='movie_box'>
                {
                    first.map((movie) => {
                        return <div className='every_movie'>

                            {/* <p>Hi </p> */}
                            <h4>{movie.title}</h4>
                            <img src={movie.imag} />
                            <p>{movie.year}</p>

                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Hooked