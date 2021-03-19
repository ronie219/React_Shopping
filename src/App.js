import ShopingList from "./components/ShoppingList";
import Detail from "./components/ItemDetail";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";

const store = createStore(rootReducer, applyMiddleware(thunk));
const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Route exact strict path="/" render={() => <ShopingList />} />
        <Route exact strict path="/detail/:id" render={() => <Detail />} />
      </Provider>
    </Router>
  );
};

export default App;
