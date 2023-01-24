import React from 'react'

function GifList({ gifs }) {
  return (
    <ul>
        {gifs.maps((gif) => (
            <li key={gif.url}>
                <img src={gif.url} alt="gif"/>
            </li>
        ))}
    </ul>
  )
}

export default GifList