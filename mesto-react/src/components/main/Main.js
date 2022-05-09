import React, { useState, useEffect, useContext } from "react";
import { ApiSet } from "../../utils/Api";
import Card from "../card/Card";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Main(props) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    ApiSet.getInitialCards().then((res) => {
      const formattedData = res.map((cardData) => {
        return {
          likes: cardData.likes,
          likesCount: cardData.likes.length,
          link: cardData.link,
          name: cardData.name,
          isOpen: false,
          id: cardData._id,
          ownerId: cardData.owner._id
        };
      });
      setCards(formattedData);
    });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar"
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
        >
          <div className="profile__edit-avatar">
            <button
              className="profile__edit-avatar-button"
              type="button"
              aria-label="Изменить аватар"
              onClick={props.onEditAvatar}
            ></button>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__name-container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements" aria-label="Места">
        <ul className="elements__container">
          {cards.map((card) => {
            return (
              <Card card={card} onCardClick={props.onCardClick} key={card.id} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
