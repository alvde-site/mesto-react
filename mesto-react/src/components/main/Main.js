import React, { useState, useEffect } from 'react';
import { api } from '../../utils/Api';

function Main(props) {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setUserAvatar(res.avatar);
        setUserName(res.name);
        setUserDescription(res.about);
      });
  }, [userAvatar, userName, userDescription]
  )

  useEffect(() => {
    api.getInitialCards()
      .then(res => {
        const formattedData = res.map((cardData) => {
          return {
            likes: cardData.likes.length,
            link: cardData.link,
            name: cardData.name
          }
        })
        setCards(formattedData);
      })
  }, [])


  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} >
            <div className="profile__edit-avatar">
              <button className="profile__edit-avatar-button" type="button" aria-label="Изменить аватар" onClick={props.onEditAvatar}></button>
            </div>
          </div>
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
        </section>
        <section className="elements" aria-label="Места">
          <ul className="elements__container">
            {
              cards.map((card) => {
                return (<li className="element">
                  <button className="element__remove-button" type="button" aria-label="Удалить"></button>
                  <img src={card.link} alt={card.name} className="element__img" />
                  <div className="element__description">
                    <h2 className="element__description-text">{card.name}</h2>
                    <div className="element__like-block">
                      <button className="element__like-button" type="button" aria-label="Понравилось"></button>
                      <span className="element__like-count">{card.likes}</span>
                    </div>
                  </div>
                </li>)
              })
            }
          </ul>
        </section>
      </main>
    </>
  )
}

export default Main;
