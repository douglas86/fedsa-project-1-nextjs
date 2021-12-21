import Image from 'next/image';
import styles from '../public/static/css/components/Card.module.css';

const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Image
                    src={'/static/images/chairs/chair-5.jpg'}
                    alt="chair"
                    width={500}
                    height={500}
                />
            </div>
            <div className={styles.text}>
                <h1>COUNTESSA</h1>
                <p>A mix between class and affordability</p>
                <div className={styles.prices}>
                    <p>R899</p>
                    <p>R500</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
