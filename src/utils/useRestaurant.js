import { useEffect } from 'react';
import { useState } from 'react';
import {swiggy_menu_api_URL} from '../constants'


const useRestaurant = (restId) => {
    const [restaurant, setRestaurant] = useState([]);

    useEffect(() => {
        getRestaurantInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getRestaurantInfo() {
        const response = await fetch(swiggy_menu_api_URL + restId);
        const json = await response.json();
        // console.log(json?.data?.cards?.[0]?.card?.m?.info);
        // console.log(json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        setRestaurant(json);
        // setRestaurant(json?.data?.cards[0]?.card?.card?.info);
        // setMenu(json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    }
    return restaurant;
}

export default useRestaurant