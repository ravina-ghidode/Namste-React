import { useEffect, useState } from "react";
import RestrauCard from "./RestrauCard";
import ResList from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [searchText, setSearchtext] = useState("");
  const [filterRest, setFilterRest] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "http://localhost:5000/api/swiggy/dapi/restaurants/list/v5?lat=23.20122243729405&lng=77.43602335453032&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const jsonData = await data.json();
    setListOfRest(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRest(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const status = useOnlineStatus();
  if (status === false) {
    return (
      <h1>
        looks like your offline.. Please check your internet connection !!!
      </h1>
    );
  }
  return listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //Filter the restaurant card and update the UI
              fileteredRes = listOfRest.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRest(fileteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //Filter Logic
            filteredList = listOfRest.filter((res) => res.info.avgRating > 4.5);
            setFilterRest(filteredList);
          }}
        >
          Top Rated restaurant
        </button>
      </div>
      <div className="rest-container">
        {filterRest.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restuarant/" + restaurant.info.id}
          >
            <RestrauCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
