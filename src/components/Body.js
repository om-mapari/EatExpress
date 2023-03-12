import RestrauntCard from "./RestrauntCard";
import { data } from "../constants"

function Body() {
    return (
        <div className="restaurant-list">
            {data.map((el, i) => (
                <RestrauntCard
                    key={el.data.id}
                    // name={el.data.name}
                    // cuisines={el.data.cuisines}
                    // image={el.data.cloudinaryImageId}
                    // rating={el.data.avgRating}
                    {...el.data}
                />
            ))}
        </div>
    );
}


export default Body;
