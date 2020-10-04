import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

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
                    <button type="button" name="btnLike" className={cn('element__btnLike',{'element__btnLike_active' : isLiked})}
                    onClick={()=> handleLikeClick()}
                    >
                    </button>
                    <span className="element__countLike">{likes.length}</span>
                </div>
            </div>
        </article>
    )
}

Card.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
    _id: PropTypes.string,
    owner: PropTypes.object,
    likes: PropTypes.array,
    onClickImg: PropTypes.func,
    MyId: PropTypes.string,
    onDeleteCard: PropTypes.func,
    onLikeCard: PropTypes.func,
} 

export default Card;