import RestCard from "./RestCard";
import {useState,useEffect} from "react"
import Shimmer from "./Shimmer";
import { FaSearch } from "react-icons/fa";

const Body = () => {

    const [resList,setresList]=useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);//for search item so that search in original list
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
      fetchData();
    },[]);

    const fetchData= async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4250026382604&lng=80.30175682157278&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTINGhttps://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4250026382604&lng=80.30175682157278&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const json=await data.json();

      console.log(json);

      const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setresList(restaurants);
      setAllRestaurants(restaurants);
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
        
          <div className="Input-container">
            <input type="text" className="Search-Box" placeholder="Search" onChange={(e) => setSearchText(e.target.value)}/>
            <FaSearch className="search-icon" onClick={() => {
                const searchedRest = allRestaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setresList(searchedRest);
                }}
              />
           </div>
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