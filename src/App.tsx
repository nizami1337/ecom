import { useGetProductsQuery } from "./api/storeApi"
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar"
import ProductsSkeleton from "./components/ProductsSkeleton/ProductsSkeleton";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.scss"

function App() {
  const {data, error, isLoading} = useGetProductsQuery('');
  
  return (
    <div className="app">
      <Navbar/>
      <div className="mainContainer">
      {error ? ( <>An error occured</>
        ) : isLoading ? (
          <ProductsSkeleton/>
        ) : data ? data.map(x => <Card key={x.id} item={x}/>) : null}
      </div>
      <ToastContainer/>
    </div>
  )
}

export default App
