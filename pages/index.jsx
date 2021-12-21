import Banner from '../components/Banner';
import styles from '../public/static/css/pages/index.module.css';

const Home = () => {
    return (
        <>
            <Banner />
            <div className={styles.card}>
                <h1>This is a card</h1>
            </div>
        </>
    );
};

export default Home;
