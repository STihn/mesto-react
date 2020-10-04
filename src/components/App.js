import React from 'react';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import PopupWithForm from './PopupWithForm/PopupWithForm.js';
import PopupWithImage from './ImagePopup/ImagePopup.js';
import EditProfilePopup from './EditProfilePopup/EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup/EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup/AddPlacePopup.js';
import api from '../utils/Api.js';
import '../index.css';

import {CurrentUserContext} from '../contexts/CurrentUserContext.js';


function App () {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setselectedCard] = React.useState({isOpen:false});
    const [currentUser, setCurrentUser] = React.useState({})
    const [currentCards, setCurrentCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([ api.getUserProfile(), api.getInitialCards() ])
            .then(([data, cards]) => {
                setCurrentUser(data)
                setCurrentCards(cards);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setselectedCard(false);
    }

    function handleCardClickPopupOpen({name, link}) {
        setselectedCard({...selectedCard, isOpen:true, name, link});
    }

    function handleEditProfilePopupOpen() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlacePopupOpen() {
        setIsAddPlacePopupOpen(true);
    }

    function handleEditAvatarPopupOpen() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleCardDelete(_id) {
        api.deleteCard(_id)
        .then(() => {
            const newCardLists = currentCards.filter((card) => {
                if(card._id !== _id) {
                    return true;
                }
            })
            setCurrentCards(newCardLists);
        })
    }

    function defineCard(_id, newCard) {
        const newCardLists = currentCards.map((card) => 
                    card._id === _id ? newCard : card
                );
                setCurrentCards(newCardLists);
    }
    
    function handleCardLike(_id, likes) {
        const isLiked = likes.some(i => i._id === currentUser._id);
        if(!isLiked) {
            api.likeCard(_id).then((newCard) => {
                defineCard(_id, newCard);
            })
        } else if(isLiked) {
            api.noLikeCard(_id).then((newCard) => {
                defineCard(_id, newCard)
            })
        }
    }

    function handleUpdateUser(data) {
        api.editProfile(data)
          .then((currentUser) => setCurrentUser(currentUser))
          .finally(closeAllPopups());
    }

    function handleUpdateAvatar(data) {
        api.editAvatar(data).then((newAvatar) => setCurrentUser(newAvatar))
        .finally(closeAllPopups());
    }

    function handleAddPlaceSubmit(data) {
        api.createCard(data).then((newCard) => setCurrentCards([...currentCards,newCard]))
        .finally(closeAllPopups());
    }

    
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header />
                <Main 
                cards={currentCards}
                onClickProfile={handleEditProfilePopupOpen} 
                onClickAddPlace={handleAddPlacePopupOpen} 
                onClickAvatar={handleEditAvatarPopupOpen} 
                onClickImage={handleCardClickPopupOpen} 
                onCardDelete={handleCardDelete}
                onLike={handleCardLike}
                />
                <Footer />
                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
                <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
                <PopupWithForm 
                name="toRemove" >
                    <form name="formToRemove" className="pop-up__form pop-up__form_toRemove">
                        <h2 className="pop-up__heading pop-up__heading_bottom">Вы уверены?</h2>
                        <button type="submit" name="deleteCard" className="pop-up__btnSubmit pop-up__btnSubmit_bottom">Да</button>
                    </form>
                </PopupWithForm>
                <PopupWithImage 
                onClose={closeAllPopups} 
                isOpen={selectedCard.isOpen} 
                name={selectedCard.name} 
                link={selectedCard.link}
                />
            </div>
        </CurrentUserContext.Provider>
    )
}

export default App;
