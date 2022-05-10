import React, { useState, useEffect, useContext } from "react";
import { ApiSet } from "../../utils/Api";
import Card from "../card/Card";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Main(props) {
  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    ApiSet.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
}

  useEffect(() => {
    ApiSet.getInitialCards().then((res) => {
      const formattedData = res.map((cardData) => {
        return {
          ...cardData, isOpen: false
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
              <Card card={card} onCardClick={props.onCardClick} key={card._id} onCardLike={handleCardLike}/>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
