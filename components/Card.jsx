import Image from 'next/image';
import styles from '../public/static/css/components/Card.module.css';
import { Getter } from './api';

const Card = ({ props }) => {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Image
                    src={`/static/images/chairs/${props.image}`}
                    alt="chair"
                    width={500}
                    height={500}
                />
            </div>
            <div className={styles.secondHalf}>
                <div className={styles.TopSection}>
                    <h3>{props.title}</h3>
                    <p>{props.details}</p>
                </div>
                <div className={styles.BottomSection}>
                    <div className={styles.lists}>
                        <ul>
                            <li className={styles.topPrice}>
                                R{props.originalPrice}
                            </li>
                            <li className={styles.bottomPrice}>
                                R{props.discountedPrice}
                            </li>
                        </ul>
                    </div>
                    <div className={styles.icons}>
                        <div className={styles.iconImage}>
                            <Image
                                src={`/static/images/assets/heart.svg`}
                                alt="heart"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className={styles.iconImage}>
                            <Image
                                src={`/static/images/assets/cart.svg`}
                                alt="cart"
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
