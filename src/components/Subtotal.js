import React from "react";
import "../css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";

function Subtotal() {
  const [{ cart }] = useStateValue();
  return (
    <div className="subtotal">
      <div class="subtotal__head">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
          alt=""
        />
      </div>
      <div className="subtotal__body">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({cart.length} items) : <strong>{`${value}`}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getCartTotal(cart)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Subtotal;
