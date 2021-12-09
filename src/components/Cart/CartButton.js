import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/Cart-Slice';

const CartButton = (props) => {
  const dispatch = useDispatch()

  const openCartHandler = () => {
    dispatch(cartActions.openCart())
  }
  const totalAmount = useSelector(state => state.cart.totalQuantity)
  return (
    <button className={classes.button} onClick={openCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalAmount}</span>
    </button>
  );
};

export default CartButton;
