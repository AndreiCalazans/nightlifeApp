import React from 'react';

function Card(props) {
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
                <form className="Query">
                    <label htmlFor="">
                        Are you going?
                        <input type="button" value="Yes"/>
                        <input type="button" value="No"/>                        
                    </label>
                </form>
            </div>
        </div>
    )
}

export default Card;