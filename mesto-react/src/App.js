import React from 'react';

function App() {
  return (
    <>
      <div className="page">

        {/* Начало блока header */}

        <header className="header">
          <div className="header__logo"></div>
        </header>
        {/* Начало блока content */}

        <main className="content">
          <section className="profile">
            <div className="profile__avatar">
              <div className="profile__edit-avatar">
                <button className="profile__edit-avatar-button" type="button" aria-label="Изменить аватар"></button>
              </div>
            </div>
            <div className="profile__info">
              <div className="profile__name-container">
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <button className="profile__edit-button" type="button" aria-label="Редактировать"></button>
              </div>
              <p className="profile__job">Исследователь океана</p>
            </div>
            <button className="profile__add-button" type="button" aria-label="Добавить"></button>
          </section>
          <section className="elements" aria-label="Места">
            <ul className="elements__container">
            </ul>
          </section>
        </main>

        {/* Начало блока footer */}

        <footer className="footer">
          <p className="footer__copyright">© 2020 Mesto Russia</p>
        </footer>
        <div className="popup popup_handle_profile">
          <div className="popup__container">
            <button className="popup__close" type="button" aria-label="Закрыть"></button>
            <form action="#" name="profileform" className="form" novalidate>
              <h2 className="form__title">Редактировать профиль</h2>
              <label for="profilename" className="form__field">
                <input id="profilename" type="text" className="form__input form__input_profile_name" name="profilename" placeholder="Введите имя" required minlength="2" maxlength="40" />
                  <span id="error-profilename" className="form__input-error"></span>
              </label>
              <label for="profilejob" className="form__field">
                <input id="profilejob" type="text" className="form__input form__input_profile_job" name="profilejob" placeholder="Введите профессию" required minlength="2" maxlength="200" />
                  <span id="error-profilejob" className="form__input-error"></span>
              </label>
              <button className="form__submit" type="submit">Сохранить</button>
            </form>
          </div>
        </div>
        <div className="popup popup_handle_add-element">
          <div className="popup__container">
            <button className="popup__close" type="button" aria-label="Закрыть"></button>
            <form action="#" name="cardform" className="form" novalidate>
              <h2 className="form__title">Новое место</h2>
              <label for="addname" className="form__field">
                <input id="addname" type="text" className="form__input form__input_add_name" name="name" placeholder="Название" required minlength="2" maxlength="30" />
                  <span id="error-addname" className="form__input-error"></span>
              </label>
              <label for="addlink" className="form__field">
                <input id="addlink" type="url" className="form__input form__input_add_link" name="link" placeholder="Ссылка на картинку" required />
                  <span id="error-addlink" className="form__input-error"></span>
              </label>
              <button className="form__submit" type="submit">Сохранить</button>
            </form>
          </div>
        </div>
        <div className="popup popup_handle_image-viewing">
          <div className="image-viewing">
            <button className="popup__close" type="button" aria-label="Закрыть"></button>
            <figure className="image-viewing__img-card">
              <img src="#" alt="#" className="image-viewing__image" />
                <figcaption className="image-viewing__caption"></figcaption>
            </figure>
          </div>
        </div>
        <div className="popup popup_handle_remove-confirm">
          <div className="popup__container">
            <button className="popup__close" type="button" aria-label="Закрыть"></button>
            <form action="#" name="confirmform" className="form" novalidate>
              <h2 className="form__title">Вы уверены?</h2>
              <button className="form__submit" type="submit">Да</button>
            </form>
          </div>
        </div>
        <div className="popup popup_handle_edit-avatar">
          <div className="popup__container">
            <button className="popup__close" type="button" aria-label="Закрыть"></button>
            <form action="#" name="avatarform" className="form" novalidate>
              <h2 className="form__title">Обновить аватар</h2>
              <label for="addavatar" className="form__field">
                <input id="addavatar" type="url" className="form__input form__input_add_link" name="link" placeholder="Ссылка на картинку" required />
                  <span id="error-addavatar" className="form__input-error"></span>
              </label>
              <button className="form__submit" type="submit">Сохранить</button>
            </form>
          </div>
  </div>
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
