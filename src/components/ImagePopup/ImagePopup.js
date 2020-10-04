import React from 'react';
import cn from 'classnames';


function ImagePopup ({ name, link, isOpen, onClose }) {
    
    
    return(
        <div className={cn('pop-up', 'pop-up_img', { 'pop-up_opened': isOpen })}>
            <div className="pop-up__wrap">
                <button type="button" name="closeImage" className="pop-up__btnClose" onClick={onClose}></button>
                <figure className="pop-up__inner">
                    <img className="pop-up__image" src={link} alt={name}/>
                    <figcaption className="pop-up__preview">{name}</figcaption>
                </figure>
            </div>
        </div>
    )
}

export default ImagePopup;