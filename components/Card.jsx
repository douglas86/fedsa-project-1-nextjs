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
            <h3>This is a card component</h3>
        </div>
    );
};

export default Card;
