import Image from 'next/image';
import styles from '../public/static/css/components/Card.module.css';

const Card = () => {
    return (
        <div className={styles.card}>
            <Image
                src={'/static/images/chairs/chair-0.jpg'}
                alt="chair"
                width={500}
                height={500}
            />
        </div>
    );
};

export default Card;
