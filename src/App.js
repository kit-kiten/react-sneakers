import React from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";

import Header from "./components/Header";
import Drawer from "./components/Drawer";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

const AppContext = React.createContext({});

function App() {
    const [sneakersList, setSneakersList] = React.useState([]);
    const [sneakersInDrawer, setSneakersInDrawer] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [drawerOpened, setDrawerOpened] = React.useState(false);
    const [searchInput, setSearchInput] = React.useState('');
    const [isLoaded, setIsLoaded] = React.useState(false);

    const onAddToDrawer = (obj) => {
        if (sneakersInDrawer.find(item => item.parentId === obj.parentId)){
            const numberInDrawer = sneakersInDrawer.findIndex(item => item.parentId === obj.parentId) + 1

            axios.delete(`https://62fb8ccde4bcaf5351878218.mockapi.io/itemsDrawer/${numberInDrawer}`);
            setSneakersInDrawer(prev => prev.filter(item => item.parentId !== obj.parentId))
        } else{
            axios.post('https://62fb8ccde4bcaf5351878218.mockapi.io/itemsDrawer', obj);
            setSneakersInDrawer(prev => [
                ...prev,
                obj
            ]);
        }
    }

    const onAddToFavorite = async (obj) => {
        try{
            if (favorites.find(favObj => favObj.parentId === obj.parentId)){
                const numberInFavorite = favorites.findIndex(favObj => favObj.parentId === obj.parentId) + 1

                axios.delete(`https://62fb8ccde4bcaf5351878218.mockapi.io/favorites/${numberInFavorite}`)
                setFavorites(prev => prev.filter(item => item.parentId !== obj.parentId))
            } else{
                const { data } = await axios.post('https://62fb8ccde4bcaf5351878218.mockapi.io/favorites', obj);
                setFavorites(prev => [
                    ...prev,
                    data
                ]);
            }
        } catch (err){
            alert('Ошибка при добавлении в избранное');
        }
    }

    const onDeleteFromDrawer = (id) => {
        axios.delete(`https://62fb8ccde4bcaf5351878218.mockapi.io/itemsDrawer/${id}`);
        setSneakersInDrawer(prev => prev.filter(item => item.id !== id))
    }

    const onChangeSearchInput = (event) => {
        setSearchInput(event.target.value);
    }

    const onClearSearch = () => {
        setSearchInput('')
    }

    React.useEffect(() => {
        async function fetchData() {
            setIsLoaded(false);
            const itemsResponse = await axios.get('https://62fb8ccde4bcaf5351878218.mockapi.io/items')
            const drawerResponse = await axios.get('https://62fb8ccde4bcaf5351878218.mockapi.io/itemsDrawer')
            const favoritesResponse = await axios.get('https://62fb8ccde4bcaf5351878218.mockapi.io/favorites')

            setIsLoaded(true);

            setFavorites(favoritesResponse.data)
            setSneakersInDrawer(drawerResponse.data)
            setSneakersList(itemsResponse.data)
        }

        fetchData();
    }, [])

    return (
        <div className="wrapper clear">
            {
                drawerOpened && <Drawer items={sneakersInDrawer} onClose={() => setDrawerOpened(false)} onDelete={onDeleteFromDrawer}/>
            }
            <Header onClickDrawer={() => setDrawerOpened(true)}/>
            <Routes>
                <Route path="/" exact element={
                    <Home
                        sneakersList={sneakersList}
                        sneakersInDrawer={sneakersInDrawer}
                        searchInput={searchInput}
                        onChangeSearchInput={onChangeSearchInput}
                        onClearSearch={onClearSearch}
                        onAddToDrawer={onAddToDrawer}
                        onAddToFavorite={onAddToFavorite}
                        isLoaded={isLoaded}
                    />}
                />

                <Route path="/favorites" exact element={
                    <Favorites
                        favorites={favorites}
                        onAddToFavorite={onAddToFavorite}
                    />}
                />
            </Routes>
    </div>
  );
}

export default App;
