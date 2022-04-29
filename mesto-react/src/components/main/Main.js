import React, { useState, useEffect } from "react";
import { ApiSet } from "../../utils/api";
import Card from "../card/Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    ApiSet.getUserInfo().then((res) => {
      setUserAvatar(res.avatar);
      setUserName(res.name);
      setUserDescription(res.about);
    });
  }, []);

  useEffect(() => {
    ApiSet.getInitialCards().then((res) => {
      const formattedData = res.map((cardData) => {
        return {
          likes: cardData.likes.length,
          link: cardData.link,
          name: cardData.name,
          isOpen: false,
          id: cardData._id,
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
          style={{ backgroundImage: `url(${userAvatar})` }}
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
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__job">{userDescription}</p>
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
