import React from 'react'
import Rainbow from '../Components/HOC/Rainbow'

const Home = () => {
    return(
        <div>
            <div className="container">
                <h4 className="center black-text">Home</h4>
                <h5>Welcome to Nova Posts!</h5>
                <h6>Please head over to posts section for accessing posts.</h6>

                <br/>
                <p><i>* Every time this page is refreshed, the color of the text gets changed randomly since this home component is wrapped with a higher order component namely Rainbow.</i></p>

            </div>
        </div>
    )
}

export default Rainbow(Home);