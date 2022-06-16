import { Component } from "react";
import Card from "./card.components";
import './card-list.style.css'

class CardList extends Component{
    render() {
        const { monsters } = this.props
        return (
            <div className="card-list">
                {monsters.map((monster) => {
                    return (
                        <Card monster={monster} key={monster.id}/>
                    )
                })}
            </div>
        )
    }
}

export default CardList;