import React, { Component } from 'react';
import axios from 'axios';

class Artist extends Component{
    constructor(props){
        super(props);
        this.state= {artists: []};
    }
    async componentDidMount(){
        const artists = (await axios.get('/api/artists')).data;
        this.setState({ artists });
        console.log('Artist component MOUNTED')
    }
    render(){
        const { artists } = this.state;
        console.log(`rendering Artist ${JSON.stringify(this.state)} ${JSON.stringify(this.props)}`);
        return (
            <div id='Artists'>
                <ul>
                { artists.map(artist => (
                        <li key={ artist.id }>{ artist.name }</li>
                    ))
                }
                </ul>
            </div>
        )

    }
}

export default Artist;