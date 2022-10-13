import { useCallback, useEffect, useState } from "react";
//import "./App.css";
import { useParams } from "react-router-dom";

export const CategoryDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [generalCategory, setGeneralCategory] = useState(null);

  const fetchCategory = useCallback(async (categoryId) => {
    try {
      const resFetchCategory = await fetch(
        `https://us-central1-almalevisol.cloudfunctions.net/meli_function_v0/api/v1/categories/${categoryId}`
      );
      const category = await resFetchCategory.json();
      console.log("Category:::::::: ", generalCategory);
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
      setGeneralCategory([]);
      fetchCategory(id);
    }
  }, [id]);

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  if (!isLoading && Object.entries(generalCategory).length > 0) {
    return (
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          backgroundColor: "#F4F4F4",
          alignContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
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
              src={generalCategory["picture"]}
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
              <p style={{ fontSize: 10 }}> {generalCategory["id"]} </p>
              <p style={{ fontSize: 17, fontWeight: 800 }}>
                {" "}
                {generalCategory["name"]}{" "}
              </p>
              <p style={{ fontSize: 15, fontWeight: 500 }}>
                {" "}
                Productos en esta categoría{" "}
                {generalCategory["total_items_in_this_category"]}{" "}
              </p>
            </div>
          </div>
        </section>
      </main>
    );
  }
};
