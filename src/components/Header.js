function Header(props){
    return (
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
                <li className="header__list-item d-flex align-center cu-p" onClick={props.onClickDrawer}>
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
    );
}

export default Header;