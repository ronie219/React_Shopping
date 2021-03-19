import { useEffect } from "react";
import { connect } from "react-redux";
import { ShoppingListCreator, ItemDetailsCreator } from "../actoins";
import { useState } from "react";

const ShopingList = (props) => {
  const [filter, setFilter] = useState("lowestprice");

  useEffect(() => {
    /*
	The below code is used to fetch the results from the API on the first render.
	*/
    props.ShoppingListCreator();
  }, []);

  const sortProduct = (product, sort) => {
    /*
		The below is a helper fuction which helps to sort the product list feched from the API. 
	*/
    if (sort !== "") {
      product.sort((a, b) =>
        sort === "lowestprice"
          ? a.price > b.price
            ? 1
            : -1
          : a.price < b.price
          ? 1
          : -1
      );
    } else {
      product.sort((a, b) => (a.id > b.id ? 1 : -1));
    }
    return product;
  };

  const renderShoppingList = () => {
    /*
		The code below will 
		render the list of products, 
		fetched from the api on the basic of Sorting order
	*/
    const list = props.data.ShopingListReducer.data;
    if (list) {
      const data = sortProduct(list, filter);
      return data.map((item) => (
        <div key={item.id} className="column">
          <div className="ui card">
            <div className="image">
              <img src={item.image} alt="logo" />
            </div>
            <div className="content">
              <a className="header" href={`detail/${item.id}`}>
                {item.product}
              </a>
              <div className="meta">
                <span>Price ${item.price}</span>
              </div>
              <div className="description">Buyer {item.buyer}</div>
              <div className="extra content">
                <a href={`detail/${item.id}`}>details...</a>
              </div>
            </div>
          </div>
        </div>
      ));
    }
  };

  return (
    <div className="ui container">
      <div>
        <label>
          Order by
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">Select</option>
            <option value="lowestprice">Lowest to highest</option>
            <option value="highestprice">Highest to lowest</option>
          </select>
        </label>
      </div>
      <br />
      <div className="ui three column grid">{renderShoppingList()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { data: state };
};

export default connect(mapStateToProps, {
  ShoppingListCreator,
  ItemDetailsCreator,
})(ShopingList);
