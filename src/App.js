import Header from "./components/Header";
import SneakersItem from "./components/SneakersItem";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear">
        <Drawer />

        <Header />

        <section className="sneakers">
            <div className="sneakers__top d-flex justify-between">
                <h2 className="sneakers__title">
                    Все кроссовки
                </h2>

                <form action="#" className="search d-flex align-center">
                    <img width={15} height={15} src="./images/icons/search.svg" alt="search icon"/>
                    <input type="text" className="search__input" placeholder='Поиск...'/>
                </form>
            </div>
            <div className="sneakers__list d-flex justify-between flex-wrap">
                <SneakersItem />

                <li className="sneakers__item">
                    <button className="sneakers__btn-like d-flex justify-center align-center">
                        <img src="./images/icons/heart-unchecked.svg" alt="like icon"/>
                    </button>
                    <img width={133} height={112} src="./images/sneakers/2.jpg" alt="sneaker img"/>
                    <h3 className="sneakers__item-title">
                        Мужские Кроссовки Nike Air Max 270
                    </h3>
                    <div className="sneakers__inner">
                        <div className="sneakers__text">
                            Цена:
                            <span>12 999 руб.</span>
                        </div>
                        <button className="sneakers__btn-add sneakers__btn-add--checked">
                            <img src="./images/icons/checked.svg" alt="add img"/>
                        </button>
                    </div>
                </li>

                <li className="sneakers__item">
                    <button className="sneakers__btn-like d-flex justify-center align-center">
                        <img src="./images/icons/heart-unchecked.svg" alt="like icon"/>
                    </button>
                    <img width={133} height={112} src="./images/sneakers/3.jpg" alt="sneaker img"/>
                    <h3 className="sneakers__item-title">
                        Мужские Кроссовки Nike Blazer Mid Suede
                    </h3>
                    <div className="sneakers__inner">
                        <div className="sneakers__text">
                            Цена:
                            <span>8 499 руб.</span>
                        </div>
                        <button className="sneakers__btn-add">
                            <img src="./images/add.svg" alt="add img"/>
                        </button>
                    </div>
                </li>

                <li className="sneakers__item">
                    <button className="sneakers__btn-like d-flex justify-center align-center">
                        <img src="./images/icons/heart-unchecked.svg" alt="like icon"/>
                    </button>
                    <img width={133} height={112} src="./images/sneakers/4.jpg" alt="sneaker img"/>
                    <h3 className="sneakers__item-title">
                        Кроссовки Puma X Aka Boku Future Rider
                    </h3>
                    <div className="sneakers__inner">
                        <div className="sneakers__text">
                            Цена:
                            <span>8 999 руб.</span>
                        </div>
                        <button className="sneakers__btn-add">
                            <img src="./images/add.svg" alt="add img"/>
                        </button>
                    </div>
                </li>

                <li className="sneakers__item">
                    <button className="sneakers__btn-like d-flex justify-center align-center">
                        <img src="./images/icons/heart-unchecked.svg" alt="like icon"/>
                    </button>
                    <img width={133} height={112} src="./images/sneakers/5.jpg" alt="sneaker img"/>
                    <h3 className="sneakers__item-title">
                        Мужские Кроссовки Under Armour Curry 8
                    </h3>
                    <div className="sneakers__inner">
                        <div className="sneakers__text">
                            Цена:
                            <span>15 199 руб.</span>
                        </div>
                        <button className="sneakers__btn-add">
                            <img src="./images/add.svg" alt="add img"/>
                        </button>
                    </div>
                </li>

                <li className="sneakers__item">
                    <button className="sneakers__btn-like d-flex justify-center align-center">
                        <img src="./images/icons/heart-unchecked.svg" alt="like icon"/>
                    </button>
                    <img width={133} height={112} src="./images/sneakers/6.jpg" alt="sneaker img"/>
                    <h3 className="sneakers__item-title">
                        Мужские Кроссовки Nike Kyrie 7
                    </h3>
                    <div className="sneakers__inner">
                        <div className="sneakers__text">
                            Цена:
                            <span>11 299 руб..</span>
                        </div>
                        <button className="sneakers__btn-add">
                            <img src="./images/add.svg" alt="add img"/>
                        </button>
                    </div>
                </li>

                <li className="sneakers__item">
                    <button className="sneakers__btn-like d-flex justify-center align-center">
                        <img src="./images/icons/heart-unchecked.svg" alt="like icon"/>
                    </button>
                    <img width={133} height={112} src="./images/sneakers/7.jpg" alt="sneaker img"/>
                    <h3 className="sneakers__item-title">
                        Мужские Кроссовки Jordan Air Jordan 11
                    </h3>
                    <div className="sneakers__inner">
                        <div className="sneakers__text">
                            Цена:
                            <span>10 799 руб.</span>
                        </div>
                        <button className="sneakers__btn-add">
                            <img src="./images/add.svg" alt="add img"/>
                        </button>
                    </div>
                </li>

                <li className="sneakers__item">
                    <button className="sneakers__btn-like d-flex justify-center align-center">
                        <img src="./images/icons/heart-unchecked.svg" alt="like icon"/>
                    </button>
                    <img width={133} height={112} src="./images/sneakers/8.jpg" alt="sneaker img"/>
                    <h3 className="sneakers__item-title">
                        Мужские Кроссовки Nike LeBron XVIII
                    </h3>
                    <div className="sneakers__inner">
                        <div className="sneakers__text">
                            Цена:
                            <span>16 499 руб.</span>
                        </div>
                        <button className="sneakers__btn-add">
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
