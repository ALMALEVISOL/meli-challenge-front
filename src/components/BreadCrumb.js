//import "./App.css";
import { useNavigate } from "react-router-dom";

export const BreadCrumb = (props) => {
  const { paths, style } = props;
  const navigate = useNavigate();
  return (
    <div style={style}>
      <ul className="breadcrumb">
        {paths &&
          paths.length > 0 &&
          paths.map((path, idx) => (
            <li key={idx}>
              <a
                onClick={() => {
                  navigate({
                    pathname: `/categories/${path["id"]}`,
                  });
                  navigate(0);
                }}
              >
                {" "}
                {path["name"]}{" "}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};
