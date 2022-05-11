import React from "react";
import PopupWithForm from "../popupWithForm/PopupWithForm";

function EditProfilePopup(props) {
  return (
    <>
      <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          isOpen={props.isOpen}
          onClose={props.onClose}
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

    </>
  );
}

export default EditProfilePopup;


