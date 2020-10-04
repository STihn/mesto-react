import React from 'react';
import Card from '../Card/Card.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

    
function Main({onClickAvatar, onClickAddPlace, onClickProfile, onClickImage, onCardDelete, onLike, cards}) {

    const currentUser = React.useContext(CurrentUserContext);
    
    return (
        <div className="content">
            <div className="profile wrapper">
                <div className="profile__wrap">
                    <button type="button" className="profile__btnUserpic" onClick={() => onClickAvatar()}>
                        <img className="profile__userpic" src={currentUser.avatar} alt="Картинка - Профиль пользователя"  />
                    </button>
                    <div className="profile__info">
                        <div className="profile__inner">
                            <p className="profile__name">{currentUser.name}</p>
                            <button type="button" className="profile__editButton" onClick={() => onClickProfile()}></button>
                        </div>
                        <p className="profile__specialty">{currentUser.about}</p>
                    </div>
                </div>
                <button type="button" className="profile__addButton" onClick={() => onClickAddPlace()}></button>
            </div>
            <div className="elements wrapper">
                {
                    cards.map(({name, link, _id, owner, likes}) => (
                        <Card 
                        onClickImg={() => onClickImage({name, link})} 
                        name={name} 
                        link={link} 
                        key={_id}
                        owner={owner}
                        likes={likes}
                        MyId={currentUser._id}
                        onDeleteCard={() => onCardDelete(_id)}
                        onLikeCard={()=>onLike(_id, likes)}
                        />
                    ))
                }            
            </div>
        </div>
    )
}

export default Main;