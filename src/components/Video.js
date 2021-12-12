import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'
import spaceVideo from '../assets/space.mp4'

const Video = () => {
    return (
        <div className="hero">
            <video autoPlay muted loop id="video">
                <source type="video/mp4" src={spaceVideo} />
            </video>
            <div className="content">
                <h1>Galaxy. Travel.</h1>
                <p>World's first civilian space travel.</p>
                <div>
                    <Link to="/traning" className="btn">Traning</Link>
                    <Link to="/contact" className="btn btn-light">Launch</Link>
                </div>
            </div>
        </div>
    )
}

export default Video
