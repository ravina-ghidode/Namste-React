import { CDN_URL } from "../utils/constant";

const RestrauCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="resimg1"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4> {costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

//Higher Order Component

//input => RestrauCard  ==> RestrauCardPromoted

export const withPromotedLabel = (RestrauCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestrauCard {...props} />
      </div>
    );
  };
};
export default RestrauCard;
