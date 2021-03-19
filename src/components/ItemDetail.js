import { ShoppingListCreator, ItemDetailsCreator } from "../actoins";
import Loader from "./Loader";

import { useEffect } from "react";
import { connect } from "react-redux";

const ItemDetails = ({ ItemDetailsCreator, state }) => {
  useEffect(() => {
    /*
		The below hook effect use to fetch the individual data on the basis of the id of the product for th first time  
	*/
    const id = window.location.pathname.split("/")[2];
    ItemDetailsCreator(id);
  }, []);

  const data = state.ItemDetailsReducer.data;

  const addToCart = (data) => {
    /* 
		The below fuction is used to add the items in the cart using the localStorage.
	*/
    let cart = JSON.parse(localStorage.getItem("cart-item"));
    if (cart !== null) {
      cart.push(data);
    } else {
      cart = [];
      cart.push(data);
    }
    localStorage.setItem("cart-item", JSON.stringify(cart));
    alert("The cart save to your LocalStorage");
  };

  if (!data) {
    return <Loader />;
  }
  return (
    <div className="container">
      <br />
      <div className="ui items">
        <div className="item">
          <div className="image">
            <img src={data.image} alt="image" />
          </div>
          <div className="content">
            <a className="header">{data.product}</a>
            <div className="meta">
              <span>Price $ {data.price}</span>
            </div>

            <div className="extra">Buyer - {data.buyer}</div>
            <br />
            <div className="ui container">
              <button
                className="ui primary button"
                onClick={() => addToCart(data)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProp = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProp, {
  ShoppingListCreator,
  ItemDetailsCreator,
})(ItemDetails);
