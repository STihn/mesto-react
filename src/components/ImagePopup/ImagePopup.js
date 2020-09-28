import React from 'react';


function ImagePopup (props) {
    const { name, link, isOpen, onClose } = props;
    
    return(
        <div className={`pop-up pop-up_img ${isOpen && 'pop-up_opened'}`}>
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