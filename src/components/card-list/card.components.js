import { Component } from "react";
import './card.component.css'

class Card extends Component{
    render(){
        const {name,id, email} = this.props.monster
        return(
            <div className="card-container">
                            <img 
                            alt={`monster ${name}`} 
                            src={`https://robohash.org/${id}?set=set2&size=180x180`}
                            style={{height:180, width:180}}
                            />
                            <h3>{name}</h3>
                            <h6>{email}</h6>
                        </div>
        )
    }
}

export default Card;