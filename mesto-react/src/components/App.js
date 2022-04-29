import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import PopupWithForm from './popupWithForm/PopupWithForm';
import ImagePopup from './imagePopup/ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  //function open(popupSelector) {
    //document.querySelector(popupSelector).classList.add('popup_opened');
  //}

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    //open('.popup_handle_edit-avatar');
  }



  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    //open('.popup_handle_add-element');
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    //open('.popup_handle_profile');
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
        <Footer />
        <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen}>
          <label for="profilename" className="form__field">
            <input id="profilename" type="text" className="form__input form__input_profile_name" name="profilename" placeholder="Введите имя" required minlength="2" maxlength="40" />
            <span id="error-profilename" className="form__input-error"></span>
          </label>
          <label for="profilejob" className="form__field">
            <input id="profilejob" type="text" className="form__input form__input_profile_job" name="profilejob" placeholder="Введите профессию" required minlength="2" maxlength="200" />
            <span id="error-profilejob" className="form__input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm name="add-element" title="Новое место" isOpen={isAddPlacePopupOpen}>
          <label for="addname" className="form__field">
            <input id="addname" type="text" className="form__input form__input_add_name" name="name" placeholder="Название" required minlength="2" maxlength="30" />
            <span id="error-addname" className="form__input-error"></span>
          </label>
          <label for="addlink" className="form__field">
            <input id="addlink" type="url" className="form__input form__input_add_link" name="link" placeholder="Ссылка на картинку" required />
            <span id="error-addlink" className="form__input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm name="remove-confirm" title="Вы уверены?"></PopupWithForm>
        <PopupWithForm name="edit-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen}>
          <label for="addavatar" className="form__field">
            <input id="addavatar" type="url" className="form__input form__input_add_link" name="link" placeholder="Ссылка на картинку" required />
            <span id="error-addavatar" className="form__input-error"></span>
          </label>
        </PopupWithForm>
        <ImagePopup />
      </div>
      {/*<template id="element_template">
        <li className="element">
          <button className="element__remove-button" type="button" aria-label="Удалить"></button>
          <img src="#" alt="#" className="element__img" />
            <div className="element__description">
              <h2 className="element__description-text"></h2>
              <div className="element__like-block">
                <button className="element__like-button" type="button" aria-label="Понравилось"></button>
                <span className="element__like-count">0</span>
              </div>
            </div>
        </li>
      </template>*/}
    </>
  );
}

export default App;
