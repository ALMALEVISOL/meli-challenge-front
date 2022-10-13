import { useEffect, useRef, useState } from "react";
//import "./App.css";
import { useNavigate, useSearchParams } from "react-router-dom";

export const SearchBar = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mainSearchInput = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      navigate({
        pathname: "/items",
        search: `?search=${mainSearchInput.current.value}`,
      });
      navigate(0);
    } catch (error) {
      //We can send info to an advanced Sentry/logger/server
      console.log("Error::::: ", error);
    }
  };

  useEffect(() => {
    if (searchParams.get("search")) {
      setInputValue(searchParams.get("search"));
    }
  }, [searchParams]);

  return (
    <header
      style={{
        height: 40,
        backgroundColor: "#fff159",
        padding: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        className="searchbar-wrapper"
        style={{
          display: "flex",
          height: "100%",
          maxWidth: "1200px",
          margin: "0 120px 0 120px",
          width: "-webkit-fill-available",
        }}
      >
        <a
          className="meli-main-logo"
          href="/"
          style={{
            width: 125,
            marginLeft: 11,
          }}
        >
          <img
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src="https://storage.googleapis.com/us.artifacts.almalevisol.appspot.com/meli_logo.png"
          ></img>
        </a>
        <form
          className="main-search-form"
          style={{
            overflow: "auto",
            display: "inherit",
            width: "50%",
            marginLeft: 60,
            marginRight: 60,
            height: "100%",
          }}
          onSubmit={handleSubmit}
        >
          <input
            ref={mainSearchInput}
            value={inputValue}
            style={{
              width: "100%",
              height: 40,
              padding: "0 10px 0 10px",
              border: "unset",
            }}
            onChange={() => setInputValue(mainSearchInput.current.value)}
            type="text"
            aria-label="Ingresa lo que quieras encontrar"
            placeholder="Buscar productos, marcas y más…"
          />
          <button
            id="main-search-button"
            style={{
              backgroundImage: "none",
              border: "unset",
              backgroundColor: "#fff",
              height: 40,
              width: 40,
              padding: "unset",
            }}
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
          <div
            className="sb-suggestions"
            id="sb-suggestions-1"
            aria-hidden="true"
            style={{
              display: "none",
              top: "47px",
              width: "598px",
              position: "absolute",
            }}
          >
            <ul
              className="sb-suggestions__list"
              role="listbox"
              id="cb1-list"
            ></ul>
            <div className="sb-suggestions__wrapper--additional">
              <ul className="sb-suggestions__list--additional"></ul>
            </div>
          </div>
        </form>
        <a
          href="https://www.mercadolibre.com.mx/suscripciones/disneyplus#origin=banner-menu&me.bu=9&me.audience=api_loyalty_level_6_mlm&me.content_id=BM_LYL_L6_MLM&me.component_id=banner_menu_web_ml&me.logic=user_journey&me.position=0&me.bu_line=36&me.flow=-1"
          style={{ width: 340 }}
        >
          <img
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
            src="https://storage.googleapis.com/us.artifacts.almalevisol.appspot.com/disney_plus_banner.webp"
            alt="disney"
          />
        </a>
      </div>
    </header>
  );
};
