import Image from 'next/image';
import styles from '../public/static/css/components/Card.module.css';
import { Getter } from './api';

const Card = () => {
    const Get = Getter('/api/card');

    console.log('Get', Get);

    return (
        <div>
            {Get !== undefined
                ? Object.values(Get).map((item) => (
                      <div key={item.ObjectId} className={styles.card}>
                          <div className={styles.image}>
                              <Image
                                  src={`/static/images/chairs/${item.image}`}
                                  alt="chair"
                                  width={500}
                                  height={500}
                              />
                          </div>
                          <div className={styles.text}>
                              <h1>{item.title}</h1>
                              <p>{item.details}</p>
                              <div className={styles.prices}>
                                  <p>{item.originalPrice}</p>
                                  <p>{item.discountedPrice}</p>
                              </div>
                          </div>
                      </div>
                  ))
                : null}
        </div>
    );
};

export default Card;
