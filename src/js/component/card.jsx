import React from 'react'

const Card = (props) => {
    return (
        <div class="card bg-black text-light">
            <div class="card-body">
                <h5 class="card-title">{props.number || 0}</h5>
            </div>
        </div>
    )
}

export default Card;
