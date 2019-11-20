import React, { Component } from 'react'
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username : ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000')
            .then(response => {
                this.setState({
                    username : response.data.username
                });
            })
            .catch(err => console.log(err));
        console.log(this.state.username + '!');
    }

    render() {
        return (
            <div>
                <h3>Hello, {this.state.username}!</h3>
            </div>
        )
    }
}

export default App
