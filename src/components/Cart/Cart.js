import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';


const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items)
  const nbreOfItem = useSelector(state => state.cart.totalQuantity)

  return (
    <Card className={classes.cart}>
     { ( nbreOfItem===0) ? <h2>No Items</h2> :<h2>Your Shopping Cart</h2>} 
      <ul>
        {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={{ 
            title:item.name, 
            quantity: item.quantity, 
            total: item.totalPrice, 
            price: item.price,
            id:item.id
          }}
        />))}
        
      </ul>
    </Card>
  );
};

export default Cart;
