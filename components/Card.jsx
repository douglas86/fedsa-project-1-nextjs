import Image from 'next/image';
import styles from '../public/static/css/components/Card.module.css';
import { Getter } from './api';

const Card = () => {
    const Get = Getter('/api/card');

    return (
        <div>
            {Get !== undefined
                ? Object.values(Get.data).map((item) => (
                      <div key={item.ObjectId} className={styles.card}>
                          <div className={styles.image}>
                              <Image
                                  src={`/static/images/chairs/${item.image}`}
                                  alt="chair"
                                  width={500}
                                  height={500}
                              />
                          </div>
                      </div>
                  ))
                : null}
        </div>
    );
};

export default Card;
