import { ToastContainer, toast } from "react-toastify";
import Navbar from "../Navbar/Navbar";
import { useGetProductByIDQuery } from "../../api/storeApi";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/slices/cartSlice";
import { useAppDispatch } from "../../redux/hooks";

const Product = () => {
    const dispatch = useAppDispatch();
    const {id} = useParams();
    const {data, isLoading, error} = useGetProductByIDQuery(id ? id : '1')

    return (
        <div className="app">
            <Navbar/>
            {error ? ( <>An error occured</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <div className="product flex gap-10">
                    <img width={450} src={data.image}/>
                    <div className="product__details flex flex-col gap-3">
                        <h2 className="text-3xl">{data.title}</h2>
                        <div className="badge badge-outline">{data.category}</div>
                        <p className="text-xl max-w-[600px]">Rating: {data.rating.rate}/5 <span>({data.rating.count} reviews)</span></p>
                        <p className="text-lg max-w-[600px]">Description: <br/>{data.description}</p>
                        <p className="text-3xl">Price: {data.price}$</p>
                        <button className="btn btn-primary" onClick={() => {dispatch(addToCart(data)); toast.success('Added to cart', {theme: 'dark'})}}>Add to cart</button>                    
                    </div>
                </div>
            ) : null}
            <ToastContainer/>
        </div>
    )
}

export default Product;