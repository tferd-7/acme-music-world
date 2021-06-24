import React, {Component} from 'react';
import Artist from './Artist';
import Album from './Album';
import Home from './Home';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            tabs: [
                {
                    name: "Home",
                    id: '',
                    return: <Home />
                }, 
                {
                    name: `Artists`,
                    id: '#artists',
                    return: <Artist />
                }, 
                {
                    name: `Albums`,
                    id: '#albums',
                    return: <Album />
                }
            ],
            selectedTab: ''
        }
    }

    async componentDidMount(){
        //const albums = (await axios.get('/api/albums')).data
        //const artists = (await axios.get('/api/artists')).data
        //this.setState({ albums, artists });
        //this.setState({albums});
        window.addEventListener('hashchange', ()=> {
            this.setState({ selectedTab: window.location.hash })
        });
        this.setState({ selectedTab: window.location.hash });
        console.log('App MOUNTED')
    }
    render(){
        console.log('App rendered')
        const { tabs, selectedTab } = this.state;
        console.log(`${selectedTab}`);
        //const { albums, artists } = this.state
        return (
            <div id='container'>
                <div id='navbar'>
                    <ul className='navTabs'>
                        { tabs.map((tab, idx) => (
                            <li className={ selectedTab === tab.id ? 'selected' : '' } key={idx}>
                                <a href={`${tab.id}`}>
                                    {tab.name}
                                </a>
                            </li>
                        ))}

                    </ul>
                </div>
                <div>
                    {
                        tabs.filter(tab => selectedTab === tab.id).map(tab => tab.return)
                    }
                </div>
            </div>

        )
    }
}

export default App;