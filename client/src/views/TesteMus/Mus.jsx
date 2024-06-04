import React from 'react'
import './msc.css'
import nwjs from "./img/nwjs.jpg"
import shy from './audio/supershy.mp3'




function Musica() {

    function play() {
        new Audio(shy).play()
    }

    return (
        <div>
            <div className="card">
                <img src={nwjs} alt="" />
                <div className="info">
                    <h5>Super Shy</h5>
                    <p>NewJeans</p>
                </div>
                <button onClick={play}>
                    Tocar
                </button>
            </div>
        </div>
    )
}

export default Musica