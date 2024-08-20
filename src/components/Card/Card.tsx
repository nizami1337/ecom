import { toast } from "react-toastify";
import { Item } from "../../types";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/slices/cartSlice";

interface ICardProps {
    item: Item
}

const Card : React.FC<ICardProps> = ({item}) => {
    const dispatch = useAppDispatch();
    
    function handleAddToCart() {
        dispatch(addToCart(item))
        toast.success('Added to cart', {theme: 'dark'})
    }

    return (
        <div className="card card-compact bg-base-200 shadow-2xl">
            <figure className="max-h-40 transition-max-height duration-500 ease-in-out hover:max-h-[2000px]">
                <img className="object-cover" src={item.image}/>
            </figure>
            <div className="card-body">
                <div className="badge badge-outline">{item.category}</div>
                <h2 className="card-title">
                {item.title}
                </h2>
                <p className="text-lg">Rating: {item.rating.rate}/5 <span className="text-xs">({item.rating.count} reviews)</span></p>
                <div className="card-actions justify-between items-center">
                    <span className="text-3xl">{item.price}$</span>
                    <button className="btn btn-primary text-xl" onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card;