import CDN_URL from "../utils/constants";

const RestCard = (props) => {
    const {resData} = props ;
    return(
        <div className="res-card">
            <img className="res-logo" src={CDN_URL+resData.info.cloudinaryImageId} alt="Sid Foods" />
            <h3>{resData.info.name}</h3>
            <h3>{(resData.info.cuisines).join(", ")}</h3>
            <h3>⭐ {resData.info.avgRating}</h3>
        </div>
    );
};

export default RestCard;
