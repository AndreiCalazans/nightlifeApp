import React from 'react';
import Nav from './Nav';
import Card from './Card';
class Bars extends React.Component {
    render () {
        return (
            <div>
                <Nav></Nav>
                <div className="cardContainer">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>                
                </div>
            </div>
        )
    }
}

export default Bars;