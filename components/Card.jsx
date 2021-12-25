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
                          <section className={styles.textContainer}>
                              <div className={styles.textContainerTop}>
                                  <h3>{item.title}</h3>
                                  <p>{item.details}</p>
                              </div>
                              <div className={styles.textContainerBottom}>
                                  <ul className={styles.prices}>
                                      <li className={styles.pricesTop}>
                                          R{item.originalPrice}
                                      </li>
                                      <li className={styles.pricesBottom}>
                                          R{item.discountedPrice}
                                      </li>
                                  </ul>
                                  <div className={styles.icons}>
                                      <button
                                          className={styles.productCardButton}
                                      >
                                          <div
                                              className={styles.cardButtonHeart}
                                          >
                                              <Image
                                                  src={`/static/images/assets/heart.svg`}
                                                  alt="heart"
                                                  width={200}
                                                  height={200}
                                              />
                                          </div>
                                      </button>
                                      <button
                                          className={styles.productCardButton}
                                      >
                                          <Image
                                              src={`/static/images/assets/cart.svg`}
                                              alt="cart"
                                              width={200}
                                              height={200}
                                          />
                                      </button>
                                  </div>
                              </div>
                          </section>
                      </div>
                  ))
                : null}
        </div>
    );
};

export default Card;
