import React from 'react';
import Nav from './Nav';
import Card from './Card';
import Warning from './Warning';
import {  isLoggedIn } from '../utils/AuthService';

import {connect} from 'react-redux';
import axios from 'axios';
import * as actions from '../actions/actions';

class Bars extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnToGoClick = this.handleOnToGoClick.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
        this.state = {
            isLoading: true,
            showWarning: false
        }
    }

    handleOnToGoClick(barName) {
        //handle on click 
        // if not logged in force log in
        if(isLoggedIn()) {
            let that = this;
            const {dispatch} = this.props;
            this.setState({isLoading: true});
           axios.post('/isGoing', {"barName": barName , "userId": this.props.user.clientID}).then((res) => {
            this.fetchBars();
           }, () => {
               console.log('something went wrong');
           })
        } else {
            this.setState({
                showWarning: true
            });
        }

    }

    fetchBars() {
          // make call to get bars 
        // and get bars from localstorage

        var {cityToSearch , dispatch} = this.props;
        cityToSearch = cityToSearch == '' ? localStorage.getItem('cityToSearch') : cityToSearch;
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


    componentWillMount() {
      
        this.fetchBars();
    }

    toggleShow() {
        if(this.state.showWarning === true) {
            this.setState({showWarning : false});
        } else {
            this.setState({showWarning : true});            
        }
    }

    render () {
        var {bars} = this.props;
        return (
            <div className='bar'>
                <Warning toggleShow={this.toggleShow} show={this.state.showWarning} msg='Please Sign in or Log In'></Warning>
                <Nav></Nav>
                {this.state.isLoading ? 
                    <div className="loading">
                        <div className="spinner">
                            <div className="bounce1"></div>
                            <div className="bounce2"></div>
                            <div className="bounce3"></div>
                        </div>
                    </div>
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
                            onToGoClick={this.handleOnToGoClick}
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