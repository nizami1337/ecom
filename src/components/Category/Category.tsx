import { useGetProductsByCategoryQuery } from "../../api/storeApi"
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar"
import ProductsSkeleton from "../ProductsSkeleton/ProductsSkeleton";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useParams } from "react-router-dom";

function Category() {
    const { category } = useParams();
    const { data, error, isLoading } = useGetProductsByCategoryQuery(category ? category : '');

    return (
        <div className="app">
            <Navbar/>
            <div className="mainContainer">
            {error ? ( <>An error occured</>
                ) : isLoading ? (
                <ProductsSkeleton/>
                ) : data ? data.map(x => <Link to={`/product/${x.id}`} key={x.id}><Card item={x}/></Link>) : null}
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Category
