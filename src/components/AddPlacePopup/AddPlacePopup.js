import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';


function AddPlacePopup({isOpen, onClose, onAddPlace}) {

    const inputNameRef = React.useRef('');
    const inputLinkRef = React.useRef('');

    function handleSubmitForm(evt) {
        evt.preventDefault();
        onAddPlace({
            name: inputNameRef.current.value,
            link: inputLinkRef.current.value
        })
    }

    return(
        <PopupWithForm 
            name="addCard" 
            isOpen={isOpen} 
            onClose={onClose}>
                <form name="formAddCard" className="pop-up__form pop-up__form-addCard" noValidate onSubmit={handleSubmitForm}>
                    <h2 className="pop-up__heading">Новое место</h2>
                    <input type="text" name="name" id="pop-up__input_caption" className="pop-up__input pop-up__input_caption" placeholder="Название" minLength="1" maxLength="30" required ref={inputNameRef}/>
                    <span id="pop-up__input_caption-error" className="pop-up__input-error"></span>
                    <input type="url" name="link" id="pop-up__input_image" className="pop-up__input pop-up__input_image" placeholder="Ссылка на картинку" required ref={inputLinkRef}/>
                    <span id="pop-up__input_image-error" className="pop-up__input-error"></span>
                    <button type="submit" name="create" className="pop-up__btnSubmit">Создать</button>
                </form>
        </PopupWithForm>
    )
}

export default AddPlacePopup;