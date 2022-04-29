import React from 'react';

function PopupWithForm(props) {
  return (
    <>
      <div className={`popup popup_handle_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <button className="popup__close" type="button" aria-label="Закрыть"></button>
          <form action="#" name={`${props.name}form`} className="form" novalidate>
            <h2 className="form__title">{props.title}</h2>
            {props.children}
            <button className="form__submit" type="submit">Сохранить</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default PopupWithForm;
