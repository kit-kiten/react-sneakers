function Drawer(){
    return (
        <div className="drawer" style={{display: "none"}}>
            <div className="drawer__content p-30 d-flex flex-column">
                <div className="drawer__top d-flex justify-between">
                    <h3 className="drawer__title">
                        Корзина
                    </h3>
                    <button className="drawer__btn-close">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z" fill="#D3D3D3"/>
                        </svg>
                    </button>
                </div>
                <ul className="drawer__list mb-40">
                    <li className="drawer__item">
                        <img width={70} height={70} src="./images/sneakers/2.jpg" alt="drawer"/>
                        <div className="drawer__text">
                            Мужские Кроссовки Nike Air Max 270
                            <span>12 999 руб.</span>
                        </div>
                        <button className="drawer__btn-del">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z" fill="#D3D3D3"/>
                            </svg>
                        </button>
                    </li>

                    <li className="drawer__item">
                        <img width={70} height={70} src="./images/sneakers/4.jpg" alt="drawer"/>
                        <div className="drawer__text">
                            Кроссовки Puma X Aka Boku Future Rider
                            <span>8 999 руб.</span>
                        </div>
                        <button className="drawer__btn-del">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z" fill="#D3D3D3"/>
                            </svg>
                        </button>
                    </li>

                </ul>
                <div className="drawer__bottom">
                    <ul className="drawer__bottom-list">
                        <li className="drawer__bottom-list__item d-flex">
                            <h4 className="drawer__bottom-title">
                                Итого:
                            </h4>
                            <div className="drawer__bottom-dashed">
                            </div>
                            <span>21 498 руб.</span>
                        </li>
                        <li className="drawer__bottom-list__item d-flex">
                            <h4 className="drawer__bottom-title">
                                Налог 5%:
                            </h4>
                            <div className="drawer__bottom-dashed">
                            </div>
                            <span>1074 руб.</span>
                        </li>
                    </ul>
                    <button className="drawer__bottom-btn pos-r">
                        Оформить заказ
                        <img className="pos-a" src="images/arrow.svg" alt="arrow"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;