import styles from '../public/static/css/components/Banner.module.css';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.banner_text}>
                <h1>Winter Sale</h1>
                <h1>35% off</h1>
                <button className={styles.button}>SEE DEALS</button>
            </div>
        </div>
    );
};

export default Banner;
