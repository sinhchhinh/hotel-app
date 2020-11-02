import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif'

export default function Loadingg () {
    return (
        <div className="loading">
            <h4>rooms data loading...</h4>
            <img src={loadingGif} alt=""></img>

        </div>
    )
}