import { useState, useEffect } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import PopupWithForm from "./popupWithForm/PopupWithForm";
import ImagePopup from "./imagePopup/ImagePopup";
import { ApiSet } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    ApiSet.getUserInfo().then((res) => {
      setCurrentUser(res);
    });
  }, []);

  function handleCardClick(cardData) {
    cardData.isOpen = true;
    setSelectedCard(cardData);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {/* Поддерево, в котором будет доступен контекст */}
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <label for="profilename" className="form__field">
            <input
              id="profilename"
              type="text"
              className="form__input form__input_profile_name"
              name="profilename"
              placeholder="Введите имя"
              required
              minlength="2"
              maxlength="40"
            />
            <span id="error-profilename" className="form__input-error"></span>
          </label>
          <label for="profilejob" className="form__field">
            <input
              id="profilejob"
              type="text"
              className="form__input form__input_profile_job"
              name="profilejob"
              placeholder="Введите профессию"
              required
              minlength="2"
              maxlength="200"
            />
            <span id="error-profilejob" className="form__input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="add-element"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <label for="addname" className="form__field">
            <input
              id="addname"
              type="text"
              className="form__input form__input_add_name"
              name="name"
              placeholder="Название"
              required
              minlength="2"
              maxlength="30"
            />
            <span id="error-addname" className="form__input-error"></span>
          </label>
          <label for="addlink" className="form__field">
            <input
              id="addlink"
              type="url"
              className="form__input form__input_add_link"
              name="link"
              placeholder="Ссылка на картинку"
              required
            />
            <span id="error-addlink" className="form__input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="remove-confirm"
          title="Вы уверены?"
          buttonText="Да"
        ></PopupWithForm>
        <PopupWithForm
          name="edit-avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <label for="addavatar" className="form__field">
            <input
              id="addavatar"
              type="url"
              className="form__input form__input_add_link"
              name="link"
              placeholder="Ссылка на картинку"
              required
            />
            <span id="error-addavatar" className="form__input-error"></span>
          </label>
        </PopupWithForm>
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          name="image-viewing"
        />
      </div>
      <Main />
    </CurrentUserContext.Provider>
  );
}

export default App;
