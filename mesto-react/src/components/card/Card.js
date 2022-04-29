import React from "react";

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <>
      <li className="element">
        <button className="element__remove-button" type="button" aria-label="Удалить"></button>
        <img src={props.card.link} alt={props.card.name} className="element__img" onClick={handleClick}/>
        <div className="element__description">
          <h2 className="element__description-text">{props.card.name}</h2>
          <div className="element__like-block">
            <button className="element__like-button" type="button" aria-label="Понравилось"></button>
            <span className="element__like-count">{props.card.likes}</span>
          </div>
        </div>
      </li>
    </>
  )
}

export default Card;