import { useContext, useEffect, useState } from "react";
import RestrauCard, { withPromotedLabel } from "./RestrauCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [searchText, setSearchtext] = useState("");
  const [filterRest, setFilterRest] = useState([]);
  const RestaurantCardpromoted = withPromotedLabel(RestrauCard);

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

  const { setUserInfo, loggedInUser } = useContext(UserContext);
  return listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
            onClick={() => {
              //Filter Logic
              filteredList = listOfRest.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilterRest(filteredList);
            }}
          >
            Top Rated restaurant
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label htmlFor="">UserName </label>
          <input
            type="text"
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserInfo(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterRest.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restuarant/" + restaurant.info.id}
          >
            {/* *if the restaurant is promoted then add a promoted label to it */}
            {restaurant.info.promoted ? (
              <RestaurantCardpromoted resData={restaurant} />
            ) : (
              <RestrauCard resData={restaurant} />
            )}
            {/* <RestrauCard resData={restaurant} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
