import { useGetProductsQuery } from "./api/storeApi"
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar"
import ProductsSkeleton from "./components/ProductsSkeleton/ProductsSkeleton";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.scss"
import { Link } from "react-router-dom";

function App() {
  const {data, error, isLoading} = useGetProductsQuery('');
  
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

export default App
