import { useCallback, useEffect, useState } from "react";
//import "./App.css";
import { useParams } from "react-router-dom";
import { BreadCrumb } from "../../components/BreadCrumb";

export const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [generalCategory, setGeneralCategory] = useState(null);

  const fetchItem = useCallback(async (itemId) => {
    try {
      const resFetchItem = await fetch(
        `https://us-central1-almalevisol.cloudfunctions.net/meli_function_v0/api/v1/items/${itemId}`
      );
      const itemJson = await resFetchItem.json();
      const resFetchCategory = await fetch(
        `https://us-central1-almalevisol.cloudfunctions.net/meli_function_v0/api/v1/categories/${itemJson["category_id"]}`
      );
      const category = await resFetchCategory.json();
      const resFetchDescription = await fetch(
        `https://us-central1-almalevisol.cloudfunctions.net/meli_function_v0/api/v1/items/${itemId}/description`
      );
      const itemDescription = await resFetchDescription.json();
      itemJson["item_description"] = itemDescription["plain_text"];
      setItem(itemJson);
      setGeneralCategory(category);
      setIsLoading(false);
    } catch (error) {
      //We can send info to an advanced Sentry/logger/server
      console.log("Error::::: ", error);
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (id && id !== "") {
      setItem([]);
      fetchItem(id);
    }
  }, [id]);

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (
    !isLoading &&
    Object.entries(item).length > 0 &&
    Object.entries(generalCategory).length > 0
  ) {
    return (
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          backgroundColor: "#F4F4F4",
          alignContent: "center",
          alignItems: "center",
          //height: "100vh",
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
        <section
          style={{
            width: "80%",
            backgroundColor: "#FFF",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            className="item-details-header"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img
              alt=""
              src={item["pictures"][0]["url"]}
              style={{ objectFit: "contain", width: "75%", height: "45vh" }}
            />
            <div
              style={{
                width: "25%",
                display: "flex",
                flexDirection: "column",
                textAlign: "initial",
                gap: 10,
                padding: 15,
              }}
            >
              <p style={{ fontSize: 10 }}> {item["id"]} </p>
              <p style={{ fontSize: 14 }}>
                {(item["condition"] === "new" ? "Nuevo" : "Usado") +
                  " - " +
                  item["sold_quantity"]}{" "}
                vendidos
              </p>
              <p style={{ fontSize: 17, fontWeight: 600 }}> {item["title"]} </p>
              <p style={{ fontSize: 35, fontWeight: 500 }}>$ {item["price"]}</p>
              <button
                style={{
                  width: "100%",
                  height: 40,
                  backgroundColor: "#3483fa",
                  borderColor: "transparent",
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              >
                <span style={{ color: "#FFF", fontSize: 17 }}>Comprar</span>
              </button>
            </div>
          </div>

          <div
            style={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              padding: 15,
            }}
          >
            <p style={{ fontSize: 24, fontWeight: 500 }}>
              {" "}
              Descripción del producto{" "}
            </p>
            <p> {item["item_description"]} </p>
          </div>
        </section>
      </main>
    );
  }
};
