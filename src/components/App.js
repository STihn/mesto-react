import React from 'react';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import PopupWithForm from './PopupWithForm/PopupWithForm.js';
import PopupWithImage from './ImagePopup/ImagePopup.js';
import  '../index.css';


function App () {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setselectedCard] = React.useState({isOpen:false});

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


    return (
      <div className="page">
        <Header />
        <Main 
        onClickProfile={handleEditProfilePopupOpen} 
        onClickAddPlace={handleAddPlacePopupOpen} 
        onClickAvatar={handleEditAvatarPopupOpen} 
        onClickImage={handleCardClickPopupOpen} 
        />
        <Footer />
        <PopupWithForm name="editProfile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
            <form name="formEditProfile" className="pop-up__form pop-up__form_editProfile" noValidate>
                <h2 className="pop-up__heading">Редактировать профиль</h2>
                <input type="text" name="name" id="pop-up__input_name" className="pop-up__input pop-up__input_name" placeholder="Имя" minLength="2" maxLength="40" required />
                <span id="pop-up__input_name-error" className="pop-up__input-error"></span>
                <input type="text" name="about" id="pop-up__input_specialty" className="pop-up__input pop-up__input_specialty" placeholder="Специальность" minLength="2" maxLength="200" required />
                <span id="pop-up__input_specialty-error" className="pop-up__input-error"></span>
                <button type="submit" name="save" disabled className="pop-up__btnSubmit pop-up__btnSubmit_inactive">Сохранить</button>
            </form>
        </PopupWithForm>
        <PopupWithForm name="addCard" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
            <form name="formAddCard" className="pop-up__form pop-up__form-addCard" noValidate>
                <h2 className="pop-up__heading">Новое место</h2>
                <input type="text" name="name" id="pop-up__input_caption" className="pop-up__input pop-up__input_caption" placeholder="Название" minLength="1" maxLength="30" required />
                <span id="pop-up__input_caption-error" className="pop-up__input-error"></span>
                <input type="url" name="link" id="pop-up__input_image" className="pop-up__input pop-up__input_image" placeholder="Ссылка на картинку" required />
                <span id="pop-up__input_image-error" className="pop-up__input-error"></span>
                <button type="submit" name="create" disabled className="pop-up__btnSubmit pop-up__btnSubmit_inactive">Создать</button>
            </form>
        </PopupWithForm>
        <PopupWithForm name="toRemove" >
            <form name="formToRemove" className="pop-up__form pop-up__form_toRemove">
                <h2 className="pop-up__heading pop-up__heading_bottom">Вы уверены?</h2>
                <button type="submit" name="deleteCard" className="pop-up__btnSubmit pop-up__btnSubmit_bottom">Да</button>
            </form>
        </PopupWithForm>
        <PopupWithForm name="userpic" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
            <form name="formEditUserpic" className="pop-up__form pop-up__form-editUserpic" noValidate>
                <h2 className="pop-up__heading">Обновить аватар</h2>
                <input type="url" name="avatar" id="pop-up__input_userpic" className="pop-up__input pop-up__input_userpic" placeholder="Ссылка на картинку" required />
                <span id="pop-up__input_userpic-error" className="pop-up__input-error"></span>
                <button type="submit" name="create" disabled className="pop-up__btnSubmit pop-up__btnSubmit_inactive">Сохранить</button>
            </form>
        </PopupWithForm>
        <PopupWithImage 
        onClose={closeAllPopups} 
        isOpen={selectedCard.isOpen} 
        name={selectedCard.name} 
        link={selectedCard.link}
        />
      </div>
    )
}

export default App;
