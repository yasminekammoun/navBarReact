import React from 'react';
import Dropdown from './Dropdown';
import './Dropdown.css';

function App() {
    return (<div className="nav-bar">
        <a className="home active" id="col" href='#home'> Home</a>
        <a className="serv" href='#home'>Services<Dropdown /></a>
        <a href='#home'> Contact</a>
    </div>
    );
}
export default App;