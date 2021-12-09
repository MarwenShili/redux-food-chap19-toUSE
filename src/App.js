import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {
  const isOpenCart = useSelector(state => state.cart.isOpenCart)
  return (
    <Layout>
     {isOpenCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
