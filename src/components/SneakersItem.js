import React from "react";
import ContentLoader from "react-content-loader"


function SneakersItem({addToCard, addToFavorite, id, parentId, title, price, urlImg, favorited= false, added = false, loaded}){
    const [isAdded, setAdded] = React.useState(added);
    const [isFavorite, setFavorite] = React.useState(favorited);

    const handleClickAdd = () => {
        addToCard({id, parentId, title, price, urlImg});
        setAdded(!isAdded);
    }

    const handleClickFavorite = () => {
        addToFavorite({id, parentId, title, price, urlImg})
        setFavorite(!isFavorite)
    }

    return (
        <li className="sneakers__item">
            {
                loaded ? (
                    <>
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
                    </>
                ) : (
                    <ContentLoader
                        speed={2}
                        width={158}
                        height={210}
                        viewBox="0 0 158 210"
                        backgroundColor="#f3f3f3"
                    >
                        <rect x="0" y="0" rx="10" ry="10" width="133" height="112" />
                        <rect x="0" y="126" rx="8" ry="8" width="158" height="34" />
                        <rect x="0" y="174" rx="8" ry="8" width="79" height="32" />
                        <rect x="126" y="174" rx="8" ry="8" width="32" height="32" />
                    </ContentLoader>
                )
            }

        </li>
    )
}

export default SneakersItem;