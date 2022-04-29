import React from 'react';

function ImagePopup() {
  return (
    <>
      <div className="popup popup_handle_image-viewing">
        <div className="image-viewing">
          <button className="popup__close" type="button" aria-label="Закрыть"></button>
          <figure className="image-viewing__img-card">
            <img src="#" alt="#" className="image-viewing__image" />
            <figcaption className="image-viewing__caption"></figcaption>
          </figure>
        </div>
      </div>
    </>
  )
}

export default ImagePopup;
