import React from "react";

function SneakersItem({addToCard, title, price, urlImg}){
    const [isAdded, setAdded] = React.useState(false);
    const [isFavorite, setFavorite] = React.useState(false);

    const handleClickAdd = () => {
        addToCard({title, price, urlImg});
        setAdded(!isAdded);
    }

    const handleClickFavorite = () => {
        setFavorite(!isFavorite)
    }

    return (
        <li className="sneakers__item">
            <button className={isFavorite ? 'sneakers__btn-like--active' : 'sneakers__btn-like'} onClick={handleClickFavorite}>
            </button>
            <img width={133} height={112} src={urlImg} alt="sneaker img"/>
            <h3 className="sneakers__item-title">
                {title}
            </h3>
            <div className="sneakers__inner">
                <div className="sneakers__text">
                    Цена:
                    <span>{price} руб.</span>
                </div>
                <button className={isAdded ? 'sneakers__btn-add--checked' : 'sneakers__btn-add'} onClick={handleClickAdd}>
                </button>
            </div>
        </li>
    )
}

export default SneakersItem;