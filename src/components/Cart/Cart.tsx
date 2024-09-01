import { ToastContainer, toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart, removeFromCart, getCartItems, resetCart } from "../../redux/slices/cartSlice";
import { Item } from "../../types";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";

const Cart = () => {
    const cart = useAppSelector(getCartItems)
    const dispatch = useAppDispatch();
    const cartUnique = [...new Set(cart)]
    console.log(cart)
    const [total, setTotal] = useState(0);

    useEffect(() => {
       setTotal(cart.reduce((total, curr) => total += curr.price, 0)) 
    }, [cart])

    function add(item: Item) {
        dispatch(addToCart(item));
    }

    function remove(item: Item) {
        dispatch(removeFromCart(item));
    }

    function handlePurchase() {
        dispatch(resetCart())
        toast.success('Successful Purchase!', {theme: 'dark', position: "bottom-right"})
    }

    return (
        <div className="app">
            <Navbar/>
            {cart.length ? <div className="cart flex flex-col gap-3">
                <div className="cart__items flex flex-col gap-5 bg-base-200 p-4 rounded-2xl">
                    {cartUnique.map(item =>
                        <div className="flex items-center justify-between gap-10" key={item.id}>
                            <div className="flex items-center gap-5">
                                <img className="max-w-[90px]" src={item.image}/>
                                <h2 className="text-2xl">{item.title}</h2>
                            </div>
                            <div className="join">
                                <button className="btn join-item" onClick={() => remove(item)}>-</button>
                                <input type="text" className="input input-ghost w-10 p-0 text-center" value={cart.filter(x => x == item).length} disabled/>
                                <button className="btn join-item" onClick={() => add(item)}>+</button>
                            </div>
                        </div>
                    )
                    }
                </div>
                <div className="cart__summary flex justify-between items-center">
                    <h1 className="text-3xl">Cart Total: {total.toFixed(2)}$</h1>
                    <button className="btn btn-active btn-primary max-w-[100px]" onClick={handlePurchase}>Purchase</button>
                </div>
            </div> : <h1 className="text-2xl">Cart is empty</h1>}
            <ToastContainer/>
        </div>
    )
}

export default Cart;