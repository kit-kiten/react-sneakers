function SneakersItem(){
    return (
        <li className="sneakers__item">
            <button className="sneakers__btn-like sneakers__btn-like--active d-flex justify-center align-center">
                <img src="./images/icons/heart-checked.svg" alt="like icon"/>
            </button>
            <img width={133} height={112} src="./images/sneakers/1.jpg" alt="sneaker img"/>
            <h3 className="sneakers__item-title">
                Мужские Кроссовки Nike Blazer Mid Suede
            </h3>
            <div className="sneakers__inner">
                <div className="sneakers__text">
                    Цена:
                    <span>12 999 руб.</span>
                </div>
                <button className="sneakers__btn-add">
                    <img src="./images/add.svg" alt="add img"/>
                </button>
            </div>
        </li>
    )
}

export default SneakersItem;