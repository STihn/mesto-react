import React from 'react';
import api from '../../utils/Api';
import Card from '../Card/Card.js';
import '../../index.css';

function Main({onClickAvatar, onClickAddPlace, onClickProfile, onClickImage}) {

    const [userName, setuserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([ api.getUserProfile(), api.getInitialCards() ])
            .then(([data, cards]) => {
                setCards(cards);
                setUserAvatar(data.avatar);
                setuserName(data.name);
                setUserDescription(data.about);
            })
            .catch((err) => {
                console.log(err);
            });
    },[userName, userDescription, userAvatar, cards]);

    
    return (
        <div className="content">
            <div className="profile wrapper">
                <div className="profile__wrap">
                    <button type="button" className="profile__btnUserpic" onClick={() => onClickAvatar()}>
                        <img className="profile__userpic" src={userAvatar} alt="Картинка - Профиль пользователя"  />
                    </button>
                    <div className="profile__info">
                        <div className="profile__inner">
                            <p className="profile__name">{userName}</p>
                            <button type="button" className="profile__editButton" onClick={() => onClickProfile()}></button>
                        </div>
                        <p className="profile__specialty">{userDescription}</p>
                    </div>
                </div>
                <button type="button" className="profile__addButton" onClick={() => onClickAddPlace()}></button>
            </div>
            <div className="elements wrapper">
                {
                    cards.map(({name, link, _id}) => (
                        <Card 
                        onClickImg={() => onClickImage({name, link})} 
                        name={name} 
                        link={link} 
                        key={_id}/>
                    ))
                }            
            </div>
        </div>
    )
}

export default Main;