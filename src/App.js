import React, { Component } from 'react';
import List from './List';
import Input from './Input';
import './App.css';

class App extends Component {
    render() {
        return (

            <div>
                <Input />
                <List />
            </div>
        );
    }
}

export default App;
