import React from 'react';

function open(popupSelector) {
  document.querySelector(popupSelector).classList.add('popup_opened');
}

function handleEditAvatarClick() {
  open('.popup_handle_edit-avatar');
}

function handleEditProfileClick() {
  open('.popup_handle_profile');
}

function handleAddPlaceClick() {
  open('.popup_handle_add-element');
}

function Main() {
  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__avatar">
            <div className="profile__edit-avatar">
              <button className="profile__edit-avatar-button" type="button" aria-label="Изменить аватар" onClick={handleEditAvatarClick}></button>
            </div>
          </div>
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={handleEditProfileClick}></button>
            </div>
            <p className="profile__job">Исследователь океана</p>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить" onClick={handleAddPlaceClick}></button>
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
