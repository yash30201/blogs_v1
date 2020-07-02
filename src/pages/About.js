import React from 'react'

const About = () => {
    return(
        <div className="about">
            <div className="container about-content z-depth-3">
                <h4 className="center">About</h4>
                <div className="divider"></div><br/>
                <ul>
                    <li>Home page basically shows the implementation of a higher order component.</li><br/>
                    <li>Posts page has 10 posts which are fetched from <a href="https://jsonplaceholder.typicode.com/posts" target="_blank" rel="noopener noreferrer">jsonplacehodler.typicode</a> api and shows its title.</li><br/>
                    <li>Each post's card redirects to the corresponding fetched post on a new page.</li>
                </ul>
            </div>
        </div>
    )
}

export default About