import React from 'react';

function PopupWithForm(props) {
    const { name, children, isOpen, onClose } = props;
        return(
            <div className={isOpen ? `pop-up pop-up_${name} pop-up_opened`: `pop-up pop-up_${name}`}>
                <div className="pop-up__container">
                    <button type="button" name={`close${name}`} className="pop-up__btnClose" onClick={onClose}></button>
                    {children}
                </div>
            </div>
        )
}

export default PopupWithForm;