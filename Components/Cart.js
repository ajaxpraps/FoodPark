import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Utils/cartSlice";
import {
    swiggy_menu_api_URL,
    IMG_CDN_URL,
    ITEM_IMG_CDN_URL,
    MENU_ITEM_TYPE_KEY,
    RESTAURANT_TYPE_KEY,
  } from "../constants";

const Cart =()=>{
    
    const cartItems = useSelector(store=> store.cart.items);
    const dispatch = useDispatch();

    return(
        <>
        <div className="cart-items">
        {
            cartItems.map((item)=>{ 
                return (
                    <div className="cart-item">
                      <h1>{item.name}</h1>
                     <img
                     className="menu-item-img"
                     src={ITEM_IMG_CDN_URL + item?.img}
                     alt={item?.name}
                   />
                    </div>
                );
            })
        }
        {cartItems.length && <button  className="cart-btn" onClick={()=>{dispatch(clearCart())}}>clear All</button>}
        </div>
        </>
    );
}

export default Cart;