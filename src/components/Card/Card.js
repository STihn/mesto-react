import React from 'react';

        
function Card({name, link, _id, owner, likes, onClickImg, MyId, onDeleteCard, onLikeCard}) {
    
    const isOwn = owner._id === MyId;
    const isLiked = likes.some(i => i._id === MyId);
   

    function handleClick() {
        onClickImg({name, link});
    }
    
    function handleLikeClick() {
        onLikeCard(_id, likes)
    }

    function handleDeleteClick() {
        onDeleteCard(_id);
    }
      
    return (
        <article className="element" key={_id}>
            {isOwn && <button type="button" name="btnDelete" className="element__btnDelete" onClick={() => handleDeleteClick(_id)}></button>}
            <img className="element__image" src={link} alt={name} onClick={() => handleClick()}/>
            <div className="element__wrap">
                <p className="element__text">{name}</p>
                <div className="element__wrapper">
                    <button type="button" name="btnLike" className={isLiked ?'element__btnLike element__btnLike_active': 'element__btnLike' }
                    onClick={()=> handleLikeClick()}
                    >
                    </button>
                    <span className="element__countLike">{likes.length}</span>
                </div>
            </div>
        </article>
    )
}

export default Card;