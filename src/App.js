function App() {
  return (
    <div className="wrapper clear">
        <header className="header d-flex justify-between align-center">
            <div className="d-flex">
                <img className='mr-15' width={40} height={40} src="./images/logo.png" alt="logo"/>
                <div className="header__inner">
                    <h1 className="header__title">
                        REACT SNEAKERS
                    </h1>
                    <p className="header__subtitle">
                        Магазин лучших кроссовок
                    </p>
                </div>

            </div>
            <ul className="header__list">
                <li className="header__list-item d-flex align-center">
                    <img src="./images/icons/basket.svg" alt="icon"/>
                    <span className='pl-10'>1205 руб.</span>
                </li>
                <li className="header__list-item ml-30 d-flex align-center">
                    <img src="./images/icons/heart.svg" alt="icon"/>
                </li>
                <li className="header__list-item ml-30 d-flex align-center">
                    <img src="./images/icons/profile.svg" alt="icon"/>
                </li>
            </ul>
        </header>

        <section className="sneakers">
            <h2 className="sneakers__title">
                Все кроссовки
            </h2>
            <div className="sneakers__list d-flex justify-between flex-wrap">
                <li className="sneakers__item">
                    <img width={133} height={112} src="./images/sneakers/1.jpg" alt="sneaker img"/>
                    <h3 className="sneakers__item-title">
                        Мужские Кроссовки Nike Blazer Mid Suede
                    </h3>
                    <div className="sneakers__inner">
                        <div className="sneakers__text">
                            Цена:
                            <span>12 999 руб.</span>
                        </div>
                        <button className="sneakers__btn">
                            <img src="./images/add.svg" alt="add img"/>
                        </button>
                    </div>
                </li>

                <li className="sneakers__item">
                    <img width={133} height={112} src="./images/sneakers/2.jpg" alt="sneaker img"/>
                    <h3 className="sneakers__item-title">
                        Мужские Кроссовки Nike Air Max 270
                    </h3>
                    <div className="sneakers__inner">
                        <div className="sneakers__text">
                            Цена:
                            <span>12 999 руб.</span>
                        </div>
                        <button className="sneakers__btn">
                            <img src="./images/add.svg" alt="add img"/>
                        </button>
                    </div>
                </li>

                <li className="sneakers__item">
                    <img width={133} height={112} src="./images/sneakers/3.jpg" alt="sneaker img"/>
                    <h3 className="sneakers__item-title">
                        Мужские Кроссовки Nike Blazer Mid Suede
                    </h3>
                    <div className="sneakers__inner">
                        <div className="sneakers__text">
                            Цена:
                            <span>8 499 руб.</span>
                        </div>
                        <button className="sneakers__btn">
                            <img src="./images/add.svg" alt="add img"/>
                        </button>
                    </div>
                </li>

                <li className="sneakers__item">
                    <img width={133} height={112} src="./images/sneakers/4.jpg" alt="sneaker img"/>
                    <h3 className="sneakers__item-title">
                        Кроссовки Puma X Aka Boku Future Rider
                    </h3>
                    <div className="sneakers__inner">
                        <div className="sneakers__text">
                            Цена:
                            <span>8 999 руб.</span>
                        </div>
                        <button className="sneakers__btn">
                            <img src="./images/add.svg" alt="add img"/>
                        </button>
                    </div>
                </li>

                <li className="sneakers__item">
                    <img width={133} height={112} src="./images/sneakers/5.jpg" alt="sneaker img"/>
                    <h3 className="sneakers__item-title">
                        Мужские Кроссовки Under Armour Curry 8
                    </h3>
                    <div className="sneakers__inner">
                        <div className="sneakers__text">
                            Цена:
                            <span>15 199 руб.</span>
                        </div>
                        <button className="sneakers__btn">
                            <img src="./images/add.svg" alt="add img"/>
                        </button>
                    </div>
                </li>

                <li className="sneakers__item">
                    <img width={133} height={112} src="./images/sneakers/6.jpg" alt="sneaker img"/>
                    <h3 className="sneakers__item-title">
                        Мужские Кроссовки Nike Kyrie 7
                    </h3>
                    <div className="sneakers__inner">
                        <div className="sneakers__text">
                            Цена:
                            <span>11 299 руб..</span>
                        </div>
                        <button className="sneakers__btn">
                            <img src="./images/add.svg" alt="add img"/>
                        </button>
                    </div>
                </li>

                <li className="sneakers__item">
                    <img width={133} height={112} src="./images/sneakers/7.jpg" alt="sneaker img"/>
                    <h3 className="sneakers__item-title">
                        Мужские Кроссовки Jordan Air Jordan 11
                    </h3>
                    <div className="sneakers__inner">
                        <div className="sneakers__text">
                            Цена:
                            <span>10 799 руб.</span>
                        </div>
                        <button className="sneakers__btn">
                            <img src="./images/add.svg" alt="add img"/>
                        </button>
                    </div>
                </li>

                <li className="sneakers__item">
                    <img width={133} height={112} src="./images/sneakers/8.jpg" alt="sneaker img"/>
                    <h3 className="sneakers__item-title">
                        Мужские Кроссовки Nike LeBron XVIII
                    </h3>
                    <div className="sneakers__inner">
                        <div className="sneakers__text">
                            Цена:
                            <span>16 499 руб.</span>
                        </div>
                        <button className="sneakers__btn">
                            <img src="./images/add.svg" alt="add img"/>
                        </button>
                    </div>
                </li>
            </div>
        </section>
    </div>
  );
}

export default App;
