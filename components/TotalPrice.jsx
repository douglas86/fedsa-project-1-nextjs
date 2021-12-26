import styles from '../public/static/css/components/TotalPrice.module.css';

const TotalPrice = ({ props }) => {
    console.log('props', props);

    return (
        <div className={styles.totalPrice}>
            <h3>Total Price: R{props !== null ? props.cart : 0}</h3>
            <h4>Liked Products: {props !== null ? props.heart : 0} liked</h4>
        </div>
    );
};

export default TotalPrice;
