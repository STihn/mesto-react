import React from 'react';
import cn from 'classnames';

function PopupWithForm({ name, children, isOpen, onClose }) {
        return(
            <div className={cn(`pop-up pop-up_${name}`, { 'pop-up_opened': isOpen })}>
                <div className="pop-up__container">
                    <button type="button" name={`close${name}`} className="pop-up__btnClose" onClick={onClose}></button>
                    {children}
                </div>
            </div>
        )
}

export default PopupWithForm;