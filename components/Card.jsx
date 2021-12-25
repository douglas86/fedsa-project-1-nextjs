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
                          <div className={styles.secondHalf}>
                              <div className={styles.TopSection}>
                                  <h3>{item.title}</h3>
                                  <p>{item.details}</p>
                              </div>
                              <div className={styles.BottomSection}>
                                  <div className={styles.lists}>
                                      <ul>
                                          <li className={styles.topPrice}>
                                              R{item.originalPrice}
                                          </li>
                                          <li className={styles.bottomPrice}>
                                              R{item.discountedPrice}
                                          </li>
                                      </ul>
                                  </div>
                                  <div className={styles.icons}>
                                      <div className={styles.iconImage}>
                                          <Image
                                              src={`/static/images/assets/heart.svg`}
                                              alt="heart"
                                              width={50}
                                              height={50}
                                          />
                                      </div>
                                      <div className={styles.iconImage}>
                                          <Image
                                              src={`/static/images/assets/cart.svg`}
                                              alt="cart"
                                              width={50}
                                              height={50}
                                          />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))
                : null}
        </div>
    );
};

export default Card;
