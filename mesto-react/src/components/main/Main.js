import React from 'react';

function Main(props) {
  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__avatar">
            <div className="profile__edit-avatar">
              <button className="profile__edit-avatar-button" type="button" aria-label="Изменить аватар" onClick={props.onEditAvatar}></button>
            </div>
          </div>
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__job">Исследователь океана</p>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
        </section>
        <section className="elements" aria-label="Места">
          <ul className="elements__container">
          </ul>
        </section>
      </main>
    </>
  )
}

export default Main;
