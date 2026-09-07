import RestCard from "./RestCard";
import restaurantList from "../utils/mockdata"
import {useState} from "react"


const Body = () => {

    const [resList,setresList]=useState(restaurantList);


  return (
    <div className="body">
      <div className="filter-btn-container"> 
        <button className="filter-btn" onClick={() => {
            const filteredList=resList.filter((restaurant)=> restaurant.info.avgRating > 4.3);
            setresList(filteredList);
        }}
        >
        Top Rated Restaurant
        </button> 
        
     </div>
      <div className="rest-container">
      {resList.map((restaurant) => (
          <RestCard key={restaurant.info.id} resData={restaurant} />
        ))}
        
      </div>
    </div>
  );
};


export default Body;