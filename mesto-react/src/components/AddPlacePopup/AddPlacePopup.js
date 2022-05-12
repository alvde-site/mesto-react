import { useState/*, useEffect, useContext*/ } from "react";
import PopupWithForm from "../popupWithForm/PopupWithForm";
//import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function AddPlacePopup(props) {
  const [place, setPlace] = useState("");
  const [link, setLink] = useState("");
  // Подписка на контекст
  //const currentUser = useContext(CurrentUserContext);
  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
 /* useEffect(() => {
    setPlace(currentUser.place);
    setLink(currentUser.link);
  }, [currentUser]);*/

  function handlePlaceChange(e) {
   setPlace(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdatePlace({
      name: place,
      link,
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
        value={place||''}
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
        value={link||''}
        onChange={handleLinkChange}
      />
      <span id="error-addlink" className="form__input-error"></span>
    </label>
  </PopupWithForm>
  );
}

export default AddPlacePopup;
