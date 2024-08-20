import { ToastContainer, toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { changeQuantity, getCartItems } from "../../redux/slices/cartSlice";
import { Item } from "../../types";
import Navbar from "../Navbar/Navbar";

const Cart = () => {
    const cartItems = useAppSelector(getCartItems)
    const dispatch = useAppDispatch();
    console.log(cartItems)

    function changeQt(item: Item, quantity: number) {
        dispatch(changeQuantity({item, quantity}));
        toast.success('lets go')
    }

    return (
        <div className="app">
            <Navbar/>
            <div className="cart">
                <div className="cart__items flex flex-col gap-5 bg-base-200 p-4 rounded-2xl">
                    {cartItems.map(item => item.quantity != 0 ?  (
                        <div className="flex items-center justify-between gap-10" key={item.item.id}>
                            <div className="flex items-center gap-5">
                                <img className="max-w-[90px]" src={item.item.image}/>
                                <h2 className="text-2xl">{item.item.title}</h2>
                            </div>
                            <div className="join">
                                <button className="btn join-item" onClick={() => changeQt(item.item, item.quantity-1)}>-</button>
                                <input type="text" className="input input-ghost w-10 p-0 text-center" value={item.quantity} disabled/>
                                <button className="btn join-item" onClick={() => changeQt(item.item, item.quantity+1)}>+</button>
                            </div>
                        </div>
                    ) : null)}
                </div>
                <div className="cart__summary"></div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Cart;