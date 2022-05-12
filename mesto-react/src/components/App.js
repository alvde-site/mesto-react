import { useState, useEffect } from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import PopupWithForm from "./popupWithForm/PopupWithForm";
import ImagePopup from "./imagePopup/ImagePopup";
import { ApiSet } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup/EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup/EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup/AddPlacePopup";
import PopupWithConfirmation from "./PopupWithConfirmation/PopupWithConfirmation";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [place, setPlace] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    ApiSet.getInitialCards()
      .then((res) => {
        const formattedData = res.map((cardData) => {
          return {
            ...cardData,
            isOpen: false,
          };
        });
        setCards(formattedData);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }, []);

  useEffect(() => {
    ApiSet.getUserInfo().then((res) => {
      setCurrentUser(res);
    });
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    ApiSet.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  }

  function handleCardDelete(card) {
    handleConfirmCardDelete();
    /*ApiSet.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log(`${err}`);
      });*/
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(false);
    setIsConfirmationPopupOpen(false);
  }

  function handleAddPlaceSubmit({ name, link }) {
    setIsLoading(true);
    ApiSet.addCard({ name, link })
      .then((cardData) => {
        const newCard = {...cardData, isOpen: false};
        setCards([newCard, ...cards]);
        closeAllPopups();
        setPlace('');
        setLink('');
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(()=>{
        setIsLoading(false);
      });
  }

  function handleUpdateUser({ name, about }) {
    setIsLoading(true);
    ApiSet.editUserInfo({ name, about }).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(`${err}`);
    })
    .finally(()=>{
      setIsLoading(false);
    });
  }

  function handleUpdateAvatar({ avatar, form }) {
    setIsLoading(true);
    ApiSet.editAvatarInfo({ avatar }).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
      form.reset();
    })
    .catch((err) => {
      console.log(`${err}`);
    })
    .finally(()=>{
      setIsLoading(false);
    });
  }

  function handleConfirmCardDelete() {
    console.log('удалили')
  }

  function handleCardClick(cardData) {
    cardData.isOpen = true;
    setSelectedCard(cardData);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handlePopupWithConfirmation() {
    setIsConfirmationPopupOpen(true);
    console.log('asdf')
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      {/* Поддерево, в котором будет доступен контекст */}
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onConfirmation={handlePopupWithConfirmation}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isLoading={isLoading}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isLoading={isLoading}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onUpdatePlace={handleAddPlaceSubmit}
          isLoading={isLoading}
          place={place}
          setPlace={setPlace}
          link={link}
          setLink={setLink}
        />
        <PopupWithConfirmation
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onConfirmDelete={handleConfirmCardDelete}
          isLoading={isLoading}
        />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          name="image-viewing"
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
