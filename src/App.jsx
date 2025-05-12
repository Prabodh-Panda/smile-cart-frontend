import { useState } from "react";

import PageNotFound from "components/commons/PageNotFound";
import Product from "components/Product";
import ProductList from "components/ProductList";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import CartItemContext from "./contexts/CartItemContext";
import routes from "./routes";

// eslint-disable-next-line import/extensions

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartItemContext.Provider value={[cartItems, setCartItems]}>
      <Switch>
        <Route exact component={Product} path={routes.products.show} />
        <Route exact component={ProductList} path={routes.products.index} />
        <Redirect exact from={routes.root} to={routes.products.index} />
        <Route component={PageNotFound} path="*" />
      </Switch>
    </CartItemContext.Provider>
  );
};

export default App;
