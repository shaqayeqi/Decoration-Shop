import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { Auth0Provider } from "@auth0/auth0-react";
import { ProdutsProvider } from "./context/ProductsContext";
import { FilterProvider } from "./context/filter_Context";
import { ShoppingProvider } from "./context/shopping-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-0c0ufv776v4mie77.us.auth0.com"
    clientId="FBuEbnqewoZuKIPOo8tDNIkxGebt3gKc"
    cacheLocation="localstorage"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <ProdutsProvider>
      <FilterProvider>
        <ShoppingProvider>
          <App />
        </ShoppingProvider>
      </FilterProvider>
    </ProdutsProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
