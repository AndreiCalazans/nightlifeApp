import React from 'react';

function Card(props) {
    const {isGoing , title , imgUrl, address , number, rating} = props;
    return (
        <div className="Card">
            <div className="img">
                <img src={imgUrl == ''? "http://rwamittu.com/wp-content/themes/white/assets/images/placeholder.jpg" : imgUrl} alt=""/>
            </div>
            <div className="card-body">
                <h4>{title}</h4>
                <p>{rating}</p>
                <p>{address.join(' ')}</p>
                <p>{number}</p>
                <div>
                    <p>{isGoing.length} going  
                        <PlusOrMinus isGoing={false}></PlusOrMinus>
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

function PlusOrMinus(props) {
    if(props.isGoing === true) {
        return (
            <i className="fa fa-minus" aria-hidden="true"></i>
        )
    }else {
        return (
            <i className="fa fa-plus" aria-hidden="true"></i>
        )
    }
}

export default Card;