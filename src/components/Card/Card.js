import React from 'react';

function Card({name, link, _id, onClickImg}) {

    function handleClick() {
        onClickImg({name, link});
      }  
      
    return (
        <article className="element" key={_id}>
            <button type="button" name="btnDelete" className="element__btnDelete"></button>
            <img className="element__image" src={link} alt={name} onClick={() => handleClick()}/>
            <div className="element__wrap">
                <p className="element__text">{name}</p>
                <div className="element__wrapper">
                    <button type="button" name="btnLike" className="element__btnLike"></button>
                    <span className="element__countLike">0</span>
                </div>
            </div>
        </article>
    )
}

export default Card;