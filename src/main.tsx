import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About/About.tsx'
import Cart from './components/Cart/Cart.tsx'
import Product from './components/Product/Product.tsx'
import Category from './components/Category/Category.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/cart',
    element: <Cart/>
  },
  {
    path: '/product/:id',
    element: <Product/>
  },
  {
    path: '/category/:category',
    element: <Category/>
  }
])

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
