import React, {useState, useEffect} from 'react';
import { api } from '../../utils/Api';

function Main(props) {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState('');

  useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setUserAvatar(res.avatar);
        setUserName(res.name);
        setUserDescription(res.about);
      })
  }, [userAvatar, userName, userDescription]
  )


  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} >
            <div className="profile__edit-avatar">
              <button className="profile__edit-avatar-button" type="button" aria-label="Изменить аватар" onClick={props.onEditAvatar}></button>
            </div>
          </div>
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__job">{userDescription}</p>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
        </section>
        <section className="elements" aria-label="Места">
          <ul className="elements__container">
          </ul>
        </section>
      </main>
    </>
  )
}

export default Main;
