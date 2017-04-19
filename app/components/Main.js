import React from 'react';
import Nav from './Nav';
import Card from './Card';
class Main extends React.Component {
    render () {
        return (
            <div>
                <Nav></Nav>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>                
            </div>
        )
    }
}

export default Main;