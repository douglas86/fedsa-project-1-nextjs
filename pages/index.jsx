import styles from '../public/static/css/pages/index.module.css';

import Banner from '../components/Banner';
import Card from '../components/Card';
import { Getter } from '../components/api';
import { useState } from 'react';

const Home = () => {
    const Get = Getter('/api/card');
    const [count, setCount] = useState(0);

    // let arr = ['java', 'javascript', 'nodejs', 'php'];

    // console.log('keys', arr.slice(0, 2));

    // arr.slice(0, 2).forEach((item) => {
    //     console.log('item', item);
    // });

    console.log('Button clicked: ', count);
    console.log(
        'type',
        Get !== undefined
            ? Object.entries(Get.data)
                  .slice(count, count + 3)
                  .map(([key, values]) => console.log('items', values))
            : null
    );

    return (
        <>
            <Banner />
            {Get !== undefined
                ? Object.entries(Get.data)
                      .slice(count, count + 3)
                      .map(([key, values]) => <Card key={key} props={values} />)
                : null}
            {/* <Card props={Get} /> */}
            <button
                onClick={() => (count >= 6 ? setCount(0) : setCount(count + 3))}
                className={styles.button}
            >
                LOAD MORE
            </button>
        </>
    );
};

export default Home;
