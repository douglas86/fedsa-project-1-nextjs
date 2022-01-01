import { useContext } from 'react/cjs/react.development';
import styles from '../public/static/css/components/TotalPrice.module.css';
import { Context } from './Context';

const TotalPrice = ({ props }) => {
    const context = useContext(Context);

    return (
        <div className={styles.totalPrice}>
            <h3>Total Price: R{context.cart.toFixed(2)}</h3>
            <h4>Liked Products: {context.heart} liked</h4>
        </div>
    );
};

export default TotalPrice;
