import { CDN_URL } from "../utils/constant";
const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestrauCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData?.info;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="resimg1"
        src={CDN_URL + cloudinaryImageId}
        alt="resimg1"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4> {costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};
export default RestrauCard;
