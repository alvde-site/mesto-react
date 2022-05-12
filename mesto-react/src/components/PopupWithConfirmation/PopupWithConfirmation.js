import { useContext } from "react";
import PopupWithForm from "../popupWithForm/PopupWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function PopupWithConfirmation(props) {
  // Подписка на контекст
  const currentUser = useContext(CurrentUserContext);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onConfirmDelete();
  }

  return (
    <PopupWithForm
    name="remove-confirm"
    title="Вы уверены?"
    isOpen={props.isOpen}
    onClose={props.onClose}
    onSubmit={handleSubmit}
    isLoading={props.isLoading}
    buttonText="Да"
    buttonLoadingText="Удаление..."
  ></PopupWithForm>
  );
}

export default PopupWithConfirmation;
