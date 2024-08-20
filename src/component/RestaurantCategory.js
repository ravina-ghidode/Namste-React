import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data }) => {
  const [showItems, setShowitems] = useState(false);
  const handleClick = () => {
    setShowitems(!showItems);
  };
  return (
    <div>
      {/** Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 p-4 shadow-lg ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔻 </span>
        </div>
        {/** Accordian Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
