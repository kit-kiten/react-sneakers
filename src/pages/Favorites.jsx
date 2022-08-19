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
                                parentId={obj.parentId}
                                title={obj.title}
                                price={obj.price}
                                urlImg={obj.urlImg}
                                addToFavorite={onAddToFavorite}
                                loaded={true}
                                favorited={favorites.some(item => item.parentId === obj.parentId)}/>
                        ))
                }
            </ul>
        </div>
    )
}

export default Favorites