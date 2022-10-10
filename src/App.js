import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./Appcss.css";
import {
  useNavigate,
  useSearchParams,
  createSearchParams,
  useLocation,
  Form
} from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <SearchBar />

        <Routes>
          {/* <Route path="/" element={<SearchBar />} /> */}
          <Route path="/items" element={<ItemsContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

const SearchBar = () => {
  const navigate = useNavigate();



  const handleSubmit = async (event) => {
    //event.preventDefault();
    try {
      
      
      debugger
      //navigate("/items", {replace: true})
      setTimeout( ()=>{
        navigate("/items", {
          search: "?search=xbox",
          state: {
            refresh: true,
          },
          replace: true
        }) 

      }, 100 )
      
    } catch (error) {
      //We can send info to an advanced Sentry/logger/server
      console.log("Error::::: ", error);
    }
  };






  return (
    <>
      <header
        role="banner"
        data-siteid="MLM"
        class="nav-header nav-header-plus"
      >
        <div class="nav-bounds nav-bounds-with-cart nav-bounds-with-cp">
          <a
            id="nav-skip-to-main-content"
            role="button"
            href="#root-app"
            class="nav-skip-to-main-content"
            tabindex="4"
            aria-label="Ir al contenido principal"
          >
            {/* <span class="nav-skip-to-main-content__content">Ir al contenido principal</span> */}
          </a>
          <a
            class="nav-logo"
            tabindex="2"
            onClick={(e) => {
              e.preventDefault()
              navigate({
                pathname: "items",
                search: "?search=nintendo",
              })
            }
            }
          >
            Mercado Libre México - Donde comprar y vender de todo
          </a>
          <div class="nav-header-menu-wrapper">
            <button
              class="nav-header-menu-switch"
              aria-label="Menú de usuario, Alejandro Del"
              aria-expanded="false"
              tabindex="8"
            >
              <span>
                <span class="hamburger-top-bread"></span>
                <span class="hamburger-patty"></span>
                <span class="hamburger-bottom-bread"></span>
              </span>
            </button>
            <nav
              id="nav-header-menu-mobile"
              class="nav-header-menu-mobile-logged"
              tabindex="-1"
              aria-label="Menú de usuario, Alejandro Del"
              aria-modal="true"
              role="dialog"
            >
              <div id="nav-header-menu-mobile-content">
                <div
                  id="nav-header-menu-mobile-user-info"
                  class="nav-header-menu-mobile-with-loyalty"
                  style={{ height: "auto" }}
                >
                  <div style={{ minHeight: "64px" }}>
                    <form
                      id="nav-header-mobile-avatar-form"
                      method="POST"
                      action="https://www.mercadolibre.com.mx/menu/user/picture"
                      enctype="multipart/form-data"
                    >
                      <label for="nav-header-mobile-avatar-upload">
                        <svg viewBox="0 0 100 100">
                          <path
                            stroke-linecap="round"
                            stroke-width="3"
                            stroke="#eee"
                            fill="none"
                            d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"
                          ></path>
                          <path
                            class="nav-header-mobile-loyalty-level-5"
                            stroke-linecap="round"
                            stroke-width="3"
                            stroke-dasharray="135,999"
                            fill="none"
                            d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"
                          ></path>
                        </svg>
                        <i
                          id="nav-header-mobile-user-avatar"
                          class="nav-icon-create-account-mobile"
                        ></i>
                        <input
                          type="file"
                          id="nav-header-mobile-avatar-upload"
                          name="file"
                          accept="image/jpeg,.jpg,image/gif,.gif,image/png,.png,.jpeg,image/webp,.webp"
                        />
                      </label>
                    </form>
                    <div id="nav-header-user-greetings">Hola Alejandro Del</div>
                    <div id="nav-header-user-mail-or-level">
                      <a
                        class="nav-header-mobile-loyalty-level-5 nav-header-mobile-loyalty-link"
                        href="https://www.mercadolibre.com.mx/mercado-puntos"
                      >
                        <span>Nivel 5 - Mercado Puntos</span>
                        <svg
                          class="nav-header-mobile-loyalty-link-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="7"
                          height="10"
                          viewBox="0 0 7 10"
                        >
                          <path
                            class="nav-header-mobile-loyalty-level-5"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-width="1.5"
                            d="M1.017 9.032l4.015-4.024L1.017.983"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div
                      class="nav-header-menu-mobile-with-loyalty"
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignContent: "flex-start",
                        marginLeft: "55px",
                      }}
                    >
                      <a href="//www.mercadolibre.com.mx/suscripciones/nivel-6#origin=drawer_pill">
                        <img
                          style={{ maxWidth: "100%", maxHeight: "46px" }}
                          decoding="async"
                          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                          class="lazy-loadable"
                          data-src="https://http2.mlstatic.com/resources/frontend/statics/loyal/drawer/level-6/loyalty_drawer_pill_v2_mlx.svg"
                          alt="DRAWER_PILL_LEVEL6"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <ul>
                  <li class="nav-mobile-menu-selected">
                    <a href="https://www.mercadolibre.com.mx#menu-user">
                      <i class="nav-icon-home"></i>
                      <span>Inicio</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mercadolibre.com.mx/gz/notifications/center#menu-user">
                      <i class="nav-icon-notifications-mobile"></i>
                      <span>Notificaciones</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://myaccount.mercadolibre.com.mx/purchases/list#menu-user">
                      <i class="nav-icon-purchases-mobile"></i>
                      <span>Mis compras</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://myaccount.mercadolibre.com.mx/bookmarks/list#menu-user">
                      <i class="nav-icon-bookmarks-mobile"></i>
                      <span>Favoritos</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mercadolibre.com.mx/ofertas#menu-user">
                      <i class="nav-icon-deals-mobile"></i>
                      <span>Ofertas</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mercadolibre.com.mx/credits/hub?sk=QITgtfgn#from=panel_nav_ml&amp;additional_info=side_menu&amp;#menu-user">
                      <i class="nav-icon-mercado-credits-mobile"></i>
                      <span>Mercado Crédito</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mercadolibre.com.mx/suscripciones/#menu-user">
                      <i class="nav-icon-subscriptions-mobile-video-music"></i>
                      <span>Video y música</span>
                      <span class="nav-link-tag">Nuevo</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mercadolibre.com.mx/gz/home/navigation#menu-user">
                      <i class="nav-icon-history-mobile"></i>
                      <span>Historial</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://myaccount.mercadolibre.com.mx#menu-user">
                      <i class="nav-icon-my-account-mobile"></i>
                      <span>Mi cuenta</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mercadolibre.com.mx/ayuda#menu-user">
                      <i class="nav-icon-help-mobile"></i>
                      <span>Ayuda</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mercadolibre.com.mx/mercadoshops?utm_source=mercadolibre&amp;utm_medium=menu_drawer&amp;utm_campaign=alwayson#menu-user">
                      <i class="nav-icon-mshops-mobile"></i>
                      <span>Mercado Shops</span>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://www.mercadolibre.com.mx/supermercado#menu-user">
                      <i class="nav-icon-supermercado"></i>
                      <span>Supermercado</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mercadolibre.com.mx/c/ropa-bolsas-y-calzado#menu-user">
                      <i class="nav-icon-moda-mobile"></i>
                      <span>Moda</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mercadolibre.com.mx/mas-vendidos#menu-user">
                      <i class="nav-icon-best-sellers-mobile"></i>
                      <span>Más vendidos</span>
                      <span class="nav-link-tag">Nuevo</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mercadolibre.com.mx/ofertas/compra-internacional?forceType=home&amp;showDeal=true&amp;splinterLab=admin#menu-user">
                      <i class="nav-icon-compra-internacional"></i>
                      <span>Compra Internacional</span>
                      <span class="nav-link-tag">Nuevo</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mercadolibre.com.mx/tiendas-oficiales#menu-user">
                      <i class="nav-icon-stores-mobile"></i>
                      <span>Tiendas oficiales</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mercadolibre.com.mx/categorias#menu-user">
                      <i class="nav-icon-categories-mobile"></i>
                      <span>Categorías</span>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://www.mercadolibre.com.mx/resumen#menu-user">
                      <i class="nav-icon-summary-mobile"></i>
                      <span>Resumen</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.mercadolibre.com.mx/publicar#menu-user">
                      <i class="nav-icon-vender-mobile"></i>
                      <span>Vender</span>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a
                      href="https://www.mercadolibre.com.mx/l/app#menu-user"
                      id="nav-header-menu-download-mobile"
                    >
                      <i class="nav-icon-download-mobile"></i>
                      <span>¡Compra y vende con la app!</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="nav-header-menu">
              <div class="nav-header-user">
                <label for="nav-header-user-switch">
                  <a
                    href="https://myaccount.mercadolibre.com.mx/summary"
                    class="nav-header-user-myml"
                    aria-expanded="false"
                    role="button"
                    aria-label="Menú de usuario, Alejandr..."
                    tabindex="8"
                  >
                    <span>
                      <span
                        class="nav-header-avatar-user"
                        data-js="user-menu:nav-header-avatar-user"
                      >
                        <i class="nav-icon-user"></i>
                      </span>
                      <span class="nav-header-username">Alejandr...</span>
                      <span class="nav-header-username-chevron"></span>
                    </span>
                  </a>
                </label>
                <input type="checkbox" id="nav-header-user-switch" />

                <nav
                  class="nav-header-user-layer user-menu--hidden user-menu user-menu__one-column"
                  tabindex="-1"
                  hidden="hidden"
                  aria-label="Menú de usuario, Alejandr..."
                  aria-modal="true"
                  role="dialog"
                >
                  <div class="user-menu__main">
                    <div class="user-menu__user-info-outer-container user-menu__user-with-loyalty">
                      <div class="user-menu__user-info-inner-container">
                        <div class="user-menu__user-badge user-menu__user-badge--center">
                          <div class="user-menu__user-badge-image">
                            <div class="user-menu__loyalty-components">
                              <svg
                                class="user-menu__user-progress user-menu--level-5"
                                viewBox="0 0 100 100"
                              >
                                <path
                                  class="base"
                                  stroke-linecap="round"
                                  stroke-width="4"
                                  stroke="#eee"
                                  fill="none"
                                  d="M50 10
            a 40 40 0 0 1 0 80
            a 40 40 0 0 1 0 -80"
                                ></path>
                                <path
                                  class="progress"
                                  stroke-linecap="round"
                                  stroke-width="4"
                                  percentage="60"
                                  stroke-dasharray="135,999"
                                  fill="none"
                                  d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"
                                ></path>
                              </svg>
                            </div>

                            <form
                              data-js="user-menu:avatar-form"
                              method="POST"
                              action="//www.mercadolibre.com.mx/menu/user/picture"
                              enctype="multipart/form-data"
                              class="user-menu__avatar-form"
                            >
                              <label class="user-menu__avatar-label">
                                <span class="user-menu__avatar-text">
                                  Subir foto
                                </span>

                                <span data-js="user-menu:avatar-icon">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                  >
                                    <path
                                      fill-opacity=".25"
                                      fill-rule="evenodd"
                                      d="M20 0c11.046 0 20 8.954 20 20s-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0zm0 1.5C9.783 1.5 1.5 9.783 1.5 20S9.783 38.5 20 38.5 38.5 30.217 38.5 20 30.217 1.5 20 1.5zM29.75 25v2.25H32v1.5h-2.25V31h-1.5v-2.25H26v-1.5h2.25V25h1.5zM26 24.25v1.5H13.98c-1.178 0-2.143.914-2.224 2.071l-.006.16v.75h-1.5v-.75c0-1.994 1.564-3.623 3.532-3.726l.198-.005H26zM19.999 9.248c3.728 0 6.751 3.023 6.751 6.751s-3.023 6.751-6.751 6.751-6.751-3.023-6.751-6.751 3.023-6.751 6.751-6.751zm0 1.5c-2.9 0-5.251 2.351-5.251 5.251 0 2.9 2.351 5.251 5.251 5.251 2.9 0 5.251-2.351 5.251-5.251 0-2.9-2.351-5.251-5.251-5.251z"
                                    ></path>
                                  </svg>
                                </span>

                                <img
                                  data-js="user-menu:avatar-picture"
                                  hidden=""
                                  class="user-menu__avatar-picture"
                                />
                                <input
                                  data-js="user-menu:avatar-control"
                                  name="file"
                                  type="file"
                                  class="user-menu__avatar-control"
                                  accept="image/jpeg,.jpg,image/gif,.gif,image/png,.png,.jpeg,image/webp,.webp"
                                />
                              </label>
                            </form>
                          </div>
                          <p class="user-menu__user-badge-title">
                            Hola Alejandro Del
                          </p>
                          <a
                            href="https://www.mercadolibre.com.mx/mercado-puntos#menu-user"
                            class="user-menu__user-badge-email"
                          >
                            Nivel 5 - Mercado Puntos
                            <span class="user-menu__user-badge-email__chevron"></span>
                          </a>
                        </div>
                        <div class="user-menu__user-pill">
                          <a
                            href="//www.mercadolibre.com.mx/suscripciones/nivel-6#origin=drawer_pill"
                            class="user-menu__user-pill-anchor"
                          >
                            <img
                              src="https://http2.mlstatic.com/resources/frontend/statics/loyal/drawer/level-6/loyalty_drawer_pill_v2_mlx.svg"
                              alt="DRAWER_PILL_LEVEL6"
                              decoding="async"
                              class="user-menu__user-pill-image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>

                    <ul class="user-menu__shortcuts ">
                      <li>
                        <span class="user-menu__shortcuts-separator"></span>
                        <a
                          href="https://myaccount.mercadolibre.com.mx/purchases/list#menu-user"
                          data-id="purchases"
                          rel="nofollow"
                        >
                          Compras
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.mercadolibre.com.mx/preguntas/comprador#menu-user"
                          data-id="questions"
                          rel="nofollow"
                        >
                          Preguntas
                        </a>
                      </li>
                      <li>
                        <span class="user-menu__shortcuts-separator"></span>
                        <a
                          href="https://www.mercadolibre.com.mx/credits/hub#from=panel_nav_ml&amp;additional_info=header_menu#menu-user"
                          data-id="credits"
                          rel="nofollow"
                        >
                          Mercado Crédito
                        </a>
                      </li>
                      <li>
                        <a
                          href="//www.mercadolibre.com.mx/suscripciones#origin=menu-ml#menu-user"
                          data-id="subscriptions"
                          rel="nofollow"
                        >
                          Video y música
                        </a>
                      </li>
                      <li>
                        <span class="user-menu__shortcuts-separator"></span>
                        <a
                          href="https://www.mercadolibre.com.mx/publicar/hub#menu-user"
                          data-id="sell"
                          rel="nofollow"
                        >
                          Vender
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://myaccount.mercadolibre.com.mx/summary#menu-user"
                          data-id="summary"
                          rel="nofollow"
                        >
                          Resumen
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.mercadolibre.com.mx/novedades?from=drawer#menu-user"
                          data-id="news"
                          rel="nofollow"
                        >
                          Novedades
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://myaccount.mercadolibre.com.mx/listings/list#menu-user"
                          data-id="listings"
                          rel="nofollow"
                        >
                          Publicaciones
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://myaccount.mercadolibre.com.mx/sales/list#menu-user"
                          data-id="sales"
                          rel="nofollow"
                        >
                          Ventas
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://pa.mercadolibre.com.mx/advertising?utm_source=drawer&amp;utm_medium=link&amp;utm_campaign=engagement#menu-user"
                          data-id="advertising"
                          rel="nofollow"
                        >
                          Publicidad
                          <span class="user-menu__shortcuts-tag">Nuevo</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://myaccount.mercadolibre.com.mx/billing/summary#menu-user"
                          data-id="bill"
                          rel="nofollow"
                        >
                          Facturación
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.mercadolibre.com.mx/mercadoshops?utm_source=mercadolibre&amp;utm_medium=menu_drawer&amp;utm_campaign=alwayson#menu-user"
                          data-id="mshops"
                          rel="nofollow"
                        >
                          Mercado Shops
                          <span class="user-menu__shortcuts-tag">
                            Novedades
                          </span>
                        </a>
                      </li>
                      <li>
                        <span class="user-menu__shortcuts-separator"></span>
                        <a
                          href="https://www.mercadolibre.com.mx/hub-engine/hubs/my-profile#menu-user"
                          data-id="profile"
                          rel="nofollow"
                        >
                          Mi perfil
                        </a>
                      </li>
                      <li>
                        <span class="user-menu__shortcuts-separator"></span>
                        <a
                          href="https://www.mercadolibre.com/jms/mlm/lgz/logout?go=https://www.mercadolibre.com.mx#menu-user"
                          data-id="logout"
                          rel="nofollow"
                        >
                          Salir
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="user-menu__old">
                    <a
                      href="https://myaccount.mercadolibre.com.mx#nav-header"
                      rel="nofollow"
                      tabindex="7"
                    >
                      Mi cuenta
                    </a>
                    <a
                      href="https://www.mercadolibre.com/jms/mlm/lgz/logout#nav-header"
                      rel="nofollow"
                      tabindex="7"
                    >
                      Salir
                    </a>
                  </div>

                  <span class="user-menu__chevron"></span>
                </nav>
              </div>
              <a
                href="https://myaccount.mercadolibre.com.mx/purchases/list#nav-header"
                class="option-purchases"
                rel="nofollow"
                tabindex="8"
              >
                Mis compras
              </a>
              <a
                href="https://myaccount.mercadolibre.com.mx/bookmarks/list#nav-header"
                class="option-bookmarks bookmarks-widget modeless-box-trigger"
                rel="nofollow"
                tabindex="8"
                aria-expanded="false"
              >
                <span class="bookmarks-text">Favoritos</span>
              </a>
              <a
                href="https://www.mercadolibre.com.mx/gz/notifications/center#nav-header"
                class="option-notifications notifications-widget modeless-box-trigger"
                aria-label="Notificaciones"
                rel="nofollow"
                tabindex="8"
                aria-expanded="false"
              >
                <i class="nav-icon-notifications">
                  <span>Notificaciones</span>
                </i>
                <span class="ml-count" style={{ display: "none" }}>
                  0
                </span>
              </a>
            </nav>
          </div>
          <form
            class="nav-search"
            //action="/items?search=audifonos"
            //method="get"
            //role="search"
            style={{ overflow: "auto", display: "inherit" }}
            //onSubmit={(e) => handleSubmit(e)}
          >
            {/* <form
          class="nav-search"
          action="https://www.mercadolibre.com.mx/jm/search"
          method="GET"
          role="search"
          style={{ overflow: "auto", display: "inherit" }}
        > */}
            <input
              type="text"
              class="nav-search-input"
              aria-label="Ingresa lo que quieras encontrar"
              //name="as_word"
              placeholder="Buscar productos, marcas y más…"
              maxlength="120"
              autoFocus=""
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck="false"
              autoComplete="off"
              tabIndex="2"
              //value=""
              aria-activedescendant=""
              aria-controls="cb1-list"
              aria-autocomplete="list"
              id="cb1-edit"
              aria-expanded="false"
              role="combobox"
            />
            <button
              class="nav-search-btn"
              tabindex="3"
              type="submit"
              onClick={(e) => {
              e.stopPropagation()
              }}
            >
              <div role="img" aria-label="Buscar" class="nav-icon-search"></div>
            </button>
            <div
              class="sb-suggestions"
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
                class="sb-suggestions__list"
                role="listbox"
                id="cb1-list"
              ></ul>
              <div class="sb-suggestions__wrapper--additional">
                <ul class="sb-suggestions__list--additional"></ul>
              </div>
            </div>
          </form>

          <div class="nav-menu">
            <ul class="nav-menu-list">
              <li class="nav-menu-item">
                <a
                  href="https://www.mercadolibre.com.mx/navigation/addresses-hub?go=https%3A%2F%2Fwww.mercadolibre.com.mx%2F"
                  class="nav-menu-cp nav-menu-cp-logged"
                  data-js="cp"
                  data-modal-action="true"
                  tabindex="6"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="nav-menu-cp-send">Enviar a Alejandro</span>
                  <span class="nav-menu-link-cp"> CP 54745</span>
                </a>
              </li>
              <li class="nav-menu-item">
                <a
                  href="https://www.mercadolibre.com.mx/categorias#nav-header"
                  class="nav-menu-categories-link"
                  data-js="nav-menu-categories-trigger"
                  rel="nofollow"
                  tabindex="7"
                  aria-expanded="false"
                  role="button"
                >
                  Categorías
                </a>
                <div
                  class="nav-categs"
                  data-js="nav-categs"
                  aria-label="Categorías"
                  aria-modal="true"
                  tabindex="-1"
                  role="dialog"
                  hidden=""
                >
                  <ul
                    class="nav-categs-departments"
                    data-js="nav-categs-departments"
                  ></ul>
                  <div
                    class="nav-categs-detail"
                    data-js="nav-categs-detail"
                    aria-modal="true"
                    tabindex="-1"
                    role="dialog"
                    hidden=""
                  ></div>
                </div>
              </li>
              <li class="nav-menu-item">
                <a
                  href="https://www.mercadolibre.com.mx/ofertas#nav-header"
                  class="nav-menu-item-link"
                  rel="nofollow"
                  tabindex="7"
                >
                  Ofertas
                </a>
              </li>
              <li class="nav-menu-item">
                <a
                  href="https://www.mercadolibre.com.mx/gz/home/navigation#nav-header"
                  class="nav-menu-item-link"
                  rel="nofollow"
                  tabindex="7"
                >
                  Historial
                </a>
              </li>
              <li class="nav-menu-item">
                <a
                  href="https://www.mercadolibre.com.mx/supermercado#nav-header"
                  class="nav-menu-item-link"
                  rel="nofollow"
                  tabindex="7"
                >
                  Supermercado
                </a>
              </li>
              <li class="nav-menu-item">
                <a
                  href="https://www.mercadolibre.com.mx/c/ropa-bolsas-y-calzado#nav-header"
                  class="nav-menu-item-link"
                  rel="nofollow"
                  tabindex="7"
                >
                  Moda
                </a>
              </li>
              <li class="nav-menu-item">
                <a
                  href="https://www.mercadolibre.com.mx/publicar#nav-header"
                  class="nav-menu-item-link"
                  rel="nofollow"
                  tabindex="7"
                >
                  Vender
                </a>
              </li>
              <li class="nav-menu-item">
                <a
                  href="https://www.mercadolibre.com.mx/ayuda#nav-header"
                  class="nav-menu-item-link"
                  rel="nofollow"
                  tabindex="7"
                >
                  Ayuda
                </a>
              </li>
            </ul>
          </div>
          <a
            href="https://www.mercadolibre.com.mx/gz/cart"
            title="Carrito"
            aria-label="2 productos en tu carrito"
            class="nav-cart nav-cart-full modeless-box-trigger"
            id="nav-cart"
            tabindex="9"
            aria-expanded="false"
          >
            <i class="nav-icon-cart"></i>
            <span class="nav-icon-cart-quantity">2</span>
          </a>
          <a
            href="https://www.mercadolibre.com.mx/suscripciones/disneyplus#origin=banner-menu&amp;me.flow=-1&amp;me.bu=9&amp;me.audience=api_loyalty_level_6_mlm&amp;me.content_id=BM_LYL_L6_MLM&amp;me.component_id=banner_menu_web_ml&amp;me.logic=user_journey&amp;me.position=0&amp;me.bu_line=36"
            class="exhibitor__picture"
            tabindex="5"
          >
            <img
              src="https://http2.mlstatic.com/D_NQ_761906-MLA51743451593_092022-OO.webp"
              title="COMBO+"
              alt="COMBO+"
            />
          </a>
          <a
            href="https://www.mercadolibre.com.mx/navigation/addresses-hub?go=https%3A%2F%2Fwww.mercadolibre.com.mx%2F"
            class="nav-header-cp-anchor"
            data-js="cp"
            data-modal-action="true"
            tabindex="6"
          >
            <span class="nav-menu-cp-send">Enviar a Alejandro</span>
            <span class="nav-menu-link-cp"> CP 54745</span>
          </a>
        </div>
      </header>
    </>
  );
};

const ItemsContainer = (props) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [label, setLabel] = useState("");
  const fetchItems = async (props) => {
    try {
      const params = [];
      for (let entry of searchParams.entries()) {
        params.push(entry);
      }
      console.log(searchParams.get("q"));
      console.log(params);
      const resFetchItem = await fetch(
        "http://localhost:8000/api/v1/items/search?q=" +
          searchParams.get("search")
      );
      const items = await resFetchItem.json();
      setItems(items.results);
      setIsLoading(false);
      setLabel("Search found");
    } catch (error) {
      //We can send info to an advanced Sentry/logger/server
      console.log("Error::::: ", error);
    }
  };
  useEffect(() => {
    debugger;
    if (searchParams.get("search") && searchParams.get("search") !== "") {
      setLabel("Search found");
      fetchItems();
    } else {
      console.log("Entro a ItemsContainer");
      const params = [];

      for (let entry of searchParams.entries()) {
        params.push(entry);
      }
      console.log(searchParams.get("search"));
      console.log(params);
      setLabel("Search NOT found");
    }
  }, [location.state]);

  if (items && items.length === 0 && !isLoading) {
    return <NoResultsError />;
  }

  return (
    <>
      {isLoading ? (
        <p> {label} </p>
      ) : (
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            backgroundColor: "lightgreen",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          {items &&
            items.length > 0 &&
            items.map((item) => <Item item={item} />)}
        </section>
      )}
    </>
  );
};

const Item = (props) => {
  const { item } = props;
  return (
    <div
      style={{
        width: 300,
        height: 100,
        border: "2px solid red",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <p>{item["id"]}</p>
      <p>{item["title"]}</p>
      <img
        src={item["thumbnail"]}
        style={{ border: "2px solid blue", objectFit: "contain" }}
      />
    </div>
  );
};

const NoResultsError = () => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <p>
        {" "}
        ¡Ups, no encontramos algún producto, intenta escribir otra palabra!{" "}
      </p>
      <img
        src="https://storage.googleapis.com/us.artifacts.almalevisol.appspot.com/thread-26485642-14143258703243306071.png"
        style={{ width: "60%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
};

const Loader = () => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <p>
        {" "}
        ¡Ups, no encontramos algún producto, intenta escribir otra palabra!{" "}
      </p>
      <img
        src="https://storage.googleapis.com/us.artifacts.almalevisol.appspot.com/thread-26485642-14143258703243306071.png"
        style={{ width: "60%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
};

export default App;
