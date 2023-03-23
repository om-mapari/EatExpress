import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants"
import ShimmerRestrauntCard from "./ShimmerRestaurantCard";
import useRestaurant from './../utils/useRestaurant'; // custom useRestaurant Hook

function RestaurantMenu() {
    const { restId } = useParams();
    const restaurant = useRestaurant(restId);

    return restaurant.length === 0 ? <ShimmerRestrauntCard /> : (
        <div >
            <h2>Restraunt id: {restId}</h2>
            <h2>{restaurant?.data?.cards[0]?.card?.card?.info?.name}</h2>

            <img src={IMG_CDN_URL + restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId} alt="placeholder" height={250} width={350} />
            <ul>
                <li><h4>{restaurant?.cuisines?.map((el, idx) => <span key={idx}>{el} </span>)}</h4></li>
                <li><h4>{restaurant?.data?.cards[0]?.card?.card?.info?.areaName}</h4></li>
                <li><h4>{restaurant?.data?.cards[0]?.card?.card?.info?.avgRating} ⭐</h4></li>
            </ul>

            <div>
                {restaurant?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((el, idx) => {
                    return (
                        <div key={idx}>
                            <h2>{el?.card?.card?.title}</h2>
                            <div className="restaurant-list">
                                {
                                    el?.card?.card?.itemCards?.map((el,) => {
                                        return (

                                            <div key={el?.card?.info?.name} className="card">
                                                {
                                                    el?.card?.info?.imageId ? (<img
                                                        src={IMG_CDN_URL + el?.card?.info?.imageId}
                                                        alt="noimage"
                                                    />) : (
                                                        <img
                                                            src="https://cdn.dribbble.com/users/1012566/screenshots/4187820/media/985748436085f06bb2bd63686ff491a5.jpg?compress=1&resize=400x300&vertical=top"
                                                            alt="noimage"
                                                        />
                                                    )

                                                }

                                                <h2>{el?.card?.info?.name}</h2>
                                                <h3>{el?.card?.info?.price / 100} rs</h3>
                                                <p>{el?.card?.info?.description}</p>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
}

export default RestaurantMenu;
