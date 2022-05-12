import React from "react";
import PopupWithForm from "../popupWithForm/PopupWithForm";
//import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function AddPlacePopup(props) {

  function handlePlaceChange(e) {
   props.setPlace(e.target.value);
  }

  function handleLinkChange(e) {
    props.setLink(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdatePlace({
      name: props.place,
      link: props.link,
    });
  }

  return (
    <PopupWithForm
    name="add-element"
    title="Новое место"
    isOpen={props.isOpen}
    onClose={props.onClose}
    buttonText="Сохранить"
    buttonLoadingText="Сохранение..."
    onSubmit={handleSubmit}
    isLoading={props.isLoading}
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
        value={props.place||''}
        onChange={handlePlaceChange}
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
        value={props.link||''}
        onChange={handleLinkChange}
      />
      <span id="error-addlink" className="form__input-error"></span>
    </label>
  </PopupWithForm>
  );
}

export default AddPlacePopup;
