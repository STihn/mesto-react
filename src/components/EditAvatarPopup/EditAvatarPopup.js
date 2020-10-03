import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

    const inputRef = React.useRef('');

    function handleSubmitForm(evt) {
        evt.preventDefault();
        onUpdateAvatar({
          avatar: inputRef.current.value
        });
    }

    return(
        <PopupWithForm 
            name="userpic" 
            isOpen={isOpen} 
            onClose={onClose}>
                <form name="formEditUserpic" className="pop-up__form pop-up__form-editUserpic" noValidate onSubmit={handleSubmitForm}>
                    <h2 className="pop-up__heading">Обновить аватар</h2>
                    <input type="url" name="avatar" id="pop-up__input_userpic" className="pop-up__input pop-up__input_userpic" placeholder="Ссылка на картинку" required ref={inputRef}/>
                    <span id="pop-up__input_userpic-error" className="pop-up__input-error"></span>
                    <button type="submit" name="create" className="pop-up__btnSubmit">Сохранить</button>
                </form>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;