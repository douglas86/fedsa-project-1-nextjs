import styles from '../public/static/css/pages/index.module.css';
import Banner from '../components/Banner';
import Card from '../components/Card';
import TotalPrice from '../components/TotalPrice';
import { Getter } from '../components/api';
import { useState } from 'react';

const Home = () => {
    const Get = Getter('/api/card');
    const [count, setCount] = useState(0);

    return (
        <>
            <Banner />
            <TotalPrice />
            {Get !== undefined
                ? Object.entries(Get.data)
                      .slice(count, count + 3)
                      .map(([key, values]) => <Card key={key} props={values} />)
                : null}
            <div className={styles.load_more}>
                <button
                    onClick={() =>
                        count >= 6 ? setCount(0) : setCount(count + 3)
                    }
                >
                    LOAD MORE
                </button>
            </div>
        </>
    );
};

export default Home;
