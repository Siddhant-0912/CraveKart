import RestCard from "./RestCard";
import {useState,useEffect} from "react"
import Shimmer from "./Shimmer";

const Body = () => {

    const [resList,setresList]=useState([]);

    useEffect(() => {
      fetchData();
    },[]);

    const fetchData= async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4250026382604&lng=80.30175682157278&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTINGhttps://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4250026382604&lng=80.30175682157278&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const json=await data.json();

      console.log(json);

      setresList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(resList==0){
      return <Shimmer />
    }


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