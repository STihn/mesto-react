import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';


function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);
    

    function handleChange(evt) {        
      evt.target.name === 'name'
        ? setName(evt.target.value)
        : setDescription(evt.target.value);
    }

    function handleSubmitForm(evt) {
      evt.preventDefault();
      onUpdateUser({
        name: name,
        about: description,
      });
    }

    return (
        <PopupWithForm 
            name="editProfile" 
            isOpen={isOpen} 
            onClose={onClose}
            onSubmit={handleSubmitForm}
        >
            <form name="formEditProfile" className="pop-up__form pop-up__form_editProfile" noValidate onSubmit={handleSubmitForm}>
                <h2 className="pop-up__heading">Редактировать профиль</h2>
                <input type="text" name="name" id="pop-up__input_name" className="pop-up__input pop-up__input_name" placeholder="Имя" minLength="2" maxLength="40" required onChange={handleChange}  value={name || ""}/>
                <span id="pop-up__input_name-error" className="pop-up__input-error"></span>
                <input type="text" name="about" id="pop-up__input_specialty" className="pop-up__input pop-up__input_specialty" placeholder="Специальность" minLength="2" maxLength="200" required onChange={handleChange}  value={description || ""}/>
                <span id="pop-up__input_specialty-error" className="pop-up__input-error"></span>
                <button type="submit" name="save" className="pop-up__btnSubmit">Сохранить</button>
            </form>
        </PopupWithForm>
    )
}

export default EditProfilePopup;