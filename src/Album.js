import React, { Component } from 'react';
import axios from 'axios';

class Album extends Component{
    constructor(props){
        super(props);
        this.state = {albums: []};
    }
    async componentDidMount(){
        const albums = (await axios.get('/api/albums')).data;
        this.setState({ albums });
        console.log('Album component MOUNTED');
        console.log(`${JSON.stringify(this.state)}`);
    }
    render(){
        const { albums } = this.state;
        console.log(`rendering Albums ${JSON.stringify(this.state)} ${JSON.stringify(this.props)}`);
        return(
            <div id='Albums'>
                <ul>
                { albums.map((album, idx) => (
                        <li key={idx}>
                            { album.name }
                                <ul>
                                    <li>{ album.artist.name }</li>
                                </ul>
                        </li>
                    ))
                }
                </ul>
            </div>

        )
    }
}

export default Album;