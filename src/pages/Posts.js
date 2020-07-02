import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import bgicon from '../assets/images/7049.png'

export class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(res => {
                console.log(res.data.slice(0, 10));
                this.setState({
                    posts: res.data.slice(0, 10)
                });
            })
    }
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={bgicon} alt=""/>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                        </div>
                    </div>
                )
            })
        ) : (
                <h5 className="center">No posts to show</h5>
            );

        return (
            <div>
                <div className="container">
                    <h4>Posts</h4>
                    {postList}
                </div>
            </div>
        )
    }
}

export default Posts