//import "./App.css";
import { useNavigate } from "react-router-dom";

export const Item = (props) => {
  const { item } = props;
  const navigate = useNavigate();
  return (
    <a
      onClick={() => {
        navigate({
          pathname: `/items/${item["id"]}`,
        });
        navigate(0);
      }}
      style={{
        width: "100%",
        height: 200,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <img
        alt=""
        src={item["thumbnail"]}
        style={{ objectFit: "contain", width: "20%" }}
      />
      <div
        className="item-few-details"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "80%",
          textAlign: "left",
        }}
      >
        <div
          className="item-location-detail"
          style={{ width: "80%", padding: 10 }}
        >
          <p style={{ fontSize: 22 }}> $ {item["price"]}</p>
          <p style={{ fontSize: 20 }}>{item["title"]}</p>
          <p>{item["id"]}</p>
        </div>
        <div
          className="item-location-detail"
          style={{ width: "20%", padding: 10 }}
        >
          <p>{item["address"]["state_name"]}</p>
        </div>
      </div>
    </a>
  );
};
