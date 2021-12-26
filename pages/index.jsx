import styles from '../public/static/css/pages/index.module.css';

import Banner from '../components/Banner';
import Card from '../components/Card';
import { Getter } from '../components/api';
import { useState } from 'react';

const Home = () => {
    const Get = Getter('/api/info');
    const [count, setCount] = useState(0);

    return (
        <>
            <Banner />
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
