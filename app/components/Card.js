import React from 'react';

function Card(props) {
    // const {isGoing , title , imgUrl, address , number} = props;
    return (
        <div className="Card">
            <div className="img">
                <img src="http://www.gavaghan.ca/wp-content/uploads/2014/09/placeholder.png" alt=""/>
            </div>
            <div className="card-body">
                <h4>Title</h4>
                <p>Rating</p>
                <p>993 Rua dos Papaguaios, Linhares</p>
                <p>27 99995 5555 </p>
                <div>
                    <p>{2} going  
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