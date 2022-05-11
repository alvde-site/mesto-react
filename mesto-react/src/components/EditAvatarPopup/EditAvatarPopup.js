import { useState, useEffect, useContext } from "react";
import PopupWithForm from "../popupWithForm/PopupWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditAvatarPopup(props) {
  //const [name, setName] = useState("");
  //const [description, setDescription] = useState("");
  // Подписка на контекст
  //const currentUser = useContext(CurrentUserContext);
  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  /*useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);
  function handleNameChange(e) {
    setName(e.target.value);
  }*/

  /*function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }*/

  /*function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }*/

  return (
    <>
    <PopupWithForm
          name="edit-avatar"
          title="Обновить аватар"
          isOpen={props.isOpen}
          onClose={props.onClose}
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
      {/*<PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={props.isOpen}
        onClose={props.onClose}
        buttonText="Сохранить"
        onSubmit={handleSubmit}
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
            value={name||''}
            onChange={handleNameChange}
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
            value={description||''}
            onChange={handleDescriptionChange}
          />
          <span id="error-profilejob" className="form__input-error"></span>
        </label>
  </PopupWithForm>*/}
    </>
  );
}

export default EditAvatarPopup;
