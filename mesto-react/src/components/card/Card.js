import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.ownerId === currentUser._id;
  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `element__remove-button ${
    !isOwn && "element__remove-button_hidden" // моя карточка имеет класс card__remove-button
  }`;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `...`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
      <button
        className={cardDeleteButtonClassName}
        type="button"
        aria-label="Удалить"
      ></button>
      <img
        src={props.card.link}
        alt={props.card.name}
        className="element__img"
        onClick={handleClick}
      />
      <div className="element__description">
        <h2 className="element__description-text">{props.card.name}</h2>
        <div className="element__like-block">
          <button
            className="element__like-button"
            type="button"
            aria-label="Понравилось"
          ></button>
          <span className="element__like-count">{props.card.likesCount}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
