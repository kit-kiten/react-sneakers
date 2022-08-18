import SneakersItem from "../components/SneakersItem";

function Favorites({favorites, onAddToFavorite}){
    return (
        <div>
            <h2>Мои закладки</h2>
            <ul className="sneakers__list d-flex justify-between flex-wrap">
                {
                    favorites.map((obj, index) => (
                            <SneakersItem
                                key={index}
                                id={obj.id}
                                title={obj.title}
                                price={obj.price}
                                urlImg={obj.urlImg}
                                addToFavorite={onAddToFavorite}
                                favorited={true}/>
                        ))
                }
            </ul>
        </div>
    )
}

export default Favorites