import { useEffect, useState } from "react";
//import "./App.css";
import { useSearchParams, useLocation } from "react-router-dom";
import { NoResultsError } from "../../components/NoResultsError";
import { BreadCrumb } from "../../components/BreadCrumb";
import { Item } from "../../components/Item";

export const ItemsContainer = (props) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [generalCategory, setGeneralCategory] = useState(null);
  useEffect(() => {
    if (searchParams.get("search") && searchParams.get("search") !== "") {
      setItems([]);
      const fetchItems = async () => {
        try {
          const resFetchItem = await fetch(
            `https://us-central1-almalevisol.cloudfunctions.net/meli_function_v0/api/v1/items/search?q=${searchParams.get(
              "search"
            )}&limit=${
              searchParams.get("limit") ? searchParams.get("limit") : 4
            }`
          );
          const items = await resFetchItem.json();
          if (items && items.results && items.results.length > 0) {
            const resFetchCategory = await fetch(
              "https://us-central1-almalevisol.cloudfunctions.net/meli_function_v0/api/v1/categories/" +
                items["results"][0]["category_id"]
            );
            const category = await resFetchCategory.json();
            setItems(items.results);
            setIsLoading(false);
            setGeneralCategory(category);
            return;
          } else {
            setIsLoading(false);
            setGeneralCategory(null);
          }
        } catch (error) {
          //We can send info to an advanced Sentry/logger/server
          console.log("Error::::: ", error);
        }
      };
      fetchItems();
    }
  }, [location.state, searchParams]);

  if (items && items.length === 0 && !isLoading) {
    return <NoResultsError />;
  }

  return (
    <>
      {isLoading ? (
        <p> {"Cargando..."} </p>
      ) : (
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            backgroundColor: "#F4F4F4",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <BreadCrumb
            paths={generalCategory["path_from_root"]}
            style={{
              height: 20,
              width: "80%",
              textAlign: "initial",
              padding: 15,
            }}
          />
          <div
            style={{
              width: "80%",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {items &&
              items.length > 0 &&
              items.map((item, idx) => <Item key={idx} item={item} />)}
          </div>
        </main>
      )}
    </>
  );
};
