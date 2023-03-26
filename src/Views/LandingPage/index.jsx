import React from 'react'

const LandingPage = () => {
    return (
        <div>
            <p>Click this link to get more views!</p>
            <img src={process.env.REACT_APP_PUBLIC_URL}></img> 
            <button>Watch Free Video!</button>
        </div>
    )
}

export default LandingPage