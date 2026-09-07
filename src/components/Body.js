import RestCard from "./RestCard";
import resList from "../utils/mockdata"


const Body = () => {
  return (
    <div className="body">
      <div className="search-bar"> Search </div>
      <div className="rest-container">
      {resList.map((restaurant) => (
          <RestCard key={restaurant.info.id} resData={restaurant} />
        ))}
        
      </div>
    </div>
  );
};


export default Body;