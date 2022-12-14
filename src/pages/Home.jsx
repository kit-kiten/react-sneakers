import SneakersItem from "../components/SneakersItem";
import React from "react";

function Home({sneakersList,
              sneakersInDrawer,
              searchInput,
              onChangeSearchInput,
              onClearSearch,
              onAddToDrawer,
              onAddToFavorite,
              isLoaded})
{
    const renderItems = () => {
        const filteredItems = sneakersList.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase()));
        const fakeArray = new Array(12)

        return (isLoaded ? filteredItems : [...fakeArray])
                .map((obj, index) => (
                    <SneakersItem
                        key={index}
                        addToCard={onAddToDrawer}
                        addToFavorite={onAddToFavorite}
                        added={sneakersInDrawer.some(item => item.parentId === obj.parentId)}
                        loaded={isLoaded}
                        {...obj}
                    />
                ))
    }

    return (
        <section className="sneakers">
            <div className="sneakers__top d-flex justify-between">
                <h2 className="sneakers__title">
                    {searchInput ? `Поиск по запросу '${searchInput}':` : 'Все кроссовки'}
                </h2>

                <form action="#" className="search d-flex align-center pos-r">
                    <img width={15} height={15} src="/images/icons/search.svg" alt="search icon"/>
                    <input value={searchInput} onChange={onChangeSearchInput} type="text" className="search__input" placeholder='Поиск...'/>
                    {
                        searchInput && <button onClick={onClearSearch} className="search__btn-clear pos-a">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z" fill="#D3D3D3"/>
                            </svg>
                        </button>
                    }
                </form>
            </div>
            <ul className="sneakers__list d-flex justify-between flex-wrap">
                {
                   renderItems()
                }
            </ul>
        </section>
    )
}

export default Home