import { useRef } from "react";
import PopupWithForm from "../popupWithForm/PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (
    <>
    <PopupWithForm
          name="edit-avatar"
          title="Обновить аватар"
          isOpen={props.isOpen}
          onClose={props.onClose}
          buttonText="Сохранить"
          onSubmit={handleSubmit}
        >
          <label for="addavatar" className="form__field">
            <input
              id="addavatar"
              type="url"
              className="form__input form__input_add_link"
              name="link"
              placeholder="Ссылка на картинку"
              required
              ref={avatarRef}
            />
            <span id="error-addavatar" className="form__input-error"></span>
          </label>
        </PopupWithForm>
    </>
  );
}

export default EditAvatarPopup;
