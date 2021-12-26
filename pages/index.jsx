import styles from '../public/static/css/pages/index.module.css';

import Banner from '../components/Banner';
import Card from '../components/Card';
import { Getter } from '../components/api';

const Home = () => {
    const Get = Getter('/api/card');

    return (
        <>
            <Banner />
            <Card props={Get} />
            <button className={styles.button}>LOAD MORE</button>
        </>
    );
};

export default Home;
