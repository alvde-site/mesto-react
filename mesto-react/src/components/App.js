import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import PopupWithForm from './popupWithForm/PopupWithForm';

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <PopupWithForm name="profile" title="Редактировать профиль">
          <label for="profilename" className="form__field">
            <input id="profilename" type="text" className="form__input form__input_profile_name" name="profilename" placeholder="Введите имя" required minlength="2" maxlength="40" />
            <span id="error-profilename" className="form__input-error"></span>
          </label>
          <label for="profilejob" className="form__field">
            <input id="profilejob" type="text" className="form__input form__input_profile_job" name="profilejob" placeholder="Введите профессию" required minlength="2" maxlength="200" />
            <span id="error-profilejob" className="form__input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm name="add-element" title="Новое место">
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
        <PopupWithForm name="edit-avatar" title="Обновить аватар">
          <label for="addavatar" className="form__field">
            <input id="addavatar" type="url" className="form__input form__input_add_link" name="link" placeholder="Ссылка на картинку" required />
            <span id="error-addavatar" className="form__input-error"></span>
          </label>
        </PopupWithForm>

        {/*
        <div className="popup popup_handle_image-viewing">
          <div className="image-viewing">
            <button className="popup__close" type="button" aria-label="Закрыть"></button>
            <figure className="image-viewing__img-card">
              <img src="#" alt="#" className="image-viewing__image" />
                <figcaption className="image-viewing__caption"></figcaption>
            </figure>
          </div>
        </div>
        */}
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
