import React from "react";
import axios from "axios";
import {Route, Routes} from "react-router-dom";

import Header from "./components/Header";
import Drawer from "./components/Drawer";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";


function App() {
    const [sneakersList, setSneakersList] = React.useState([]);
    const [sneakersInDrawer, setSneakersInDrawer] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [drawerOpened, setDrawerOpened] = React.useState(false);
    const [searchInput, setSearchInput] = React.useState('');

    const onAddToDrawer = (obj) => {
        setSneakersInDrawer(prev => [
            ...prev,
            obj
        ]);

        axios.post('https://62fb8ccde4bcaf5351878218.mockapi.io/itemsDrawer', obj);
    }

    const onAddToFavorite = async (obj) => {
        if (favorites.find(favObj => favObj.id === obj.id)){
            axios.delete(`https://62fb8ccde4bcaf5351878218.mockapi.io/favorites/${obj.id}`)
        } else{
            const { data } = await axios.post('https://62fb8ccde4bcaf5351878218.mockapi.io/favorites', obj);
            setFavorites(prev => [
                ...prev,
                data
            ]);
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
        axios.get('https://62fb8ccde4bcaf5351878218.mockapi.io/items').then((response) => {
            setSneakersList(response.data)
        })

        axios.get('https://62fb8ccde4bcaf5351878218.mockapi.io/itemsDrawer').then((response) => {
            setSneakersInDrawer(response.data)
        })

        axios.get('https://62fb8ccde4bcaf5351878218.mockapi.io/favorites').then((response) => {
            setFavorites(response.data)
        })
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
                        searchInput={searchInput}
                        onChangeSearchInput={onChangeSearchInput}
                        onClearSearch={onClearSearch}
                        onAddToDrawer={onAddToDrawer}
                        onAddToFavorite={onAddToFavorite}
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
