import React from 'react';
import Nav from './Nav';
import Card from './Card';
import {connect} from 'react-redux';
import axios from 'axios';
import * as actions from '../actions/actions';

class Bars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentWillMount() {
        // make call to get bars 
        // and get bars from localstorage
        var {cityToSearch , dispatch} = this.props;
        cityToSearch = cityToSearch == '' ? localStorage.getItem('cityToSearch') : cityToSearch;
        console.log(cityToSearch);
        let url = '/' + cityToSearch;
        //get bars from api then update the state
        axios.post(url).then((res) => {
            
            dispatch(actions.updateBars(res.data));
            this.setState({
                isLoading:false
            });
        }, ()=>{
            return 'something went wrong with fetching the data';
        })

    }

    render () {
        var {bars} = this.props;
        return (
            <div>
                <Nav></Nav>
                {this.state.isLoading ? 
                    <h1>Loading...</h1>
                    :
                <div className="cardContainer">
                    {bars.map((each , index) => {
                        return (
                            <Card
                            key={index} 
                            isGoing={each.isGoing === null ? [] : each.isGoing}
                            title={each.name}
                            imgUrl={each['image-url']}
                            address={each.address}
                            number={each.phone}
                            rating={each.rating}
                            ></Card>
                        )
                    })}              
                </div>
                }
                
            </div>
        )
    }
}

export default connect(
    (state) => {
        return state;
    }
)(Bars);