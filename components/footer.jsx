import styles from '../public/static/css/components/footer.module.css';
import logo from '../public/static/images/logo.svg';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.leftColumn}>
                    <h3>RICCA</h3>
                    <ul className={styles.links}>
                        <li className={styles.link}>Our Story</li>
                        <li className={styles.link}>Our Green Initiative</li>
                        <li className={styles.link}>Store Locator</li>
                        <li className={styles.link}>Careers</li>
                    </ul>
                </div>
                <div className={styles.centerColumn}>
                    <h3>ACCOUNT</h3>
                    <ul className={styles.links}>
                        <li className={styles.link}>Your Cart</li>
                        <li className={styles.link}>Your Wishlist</li>
                        <li className={styles.link}>Orders</li>
                    </ul>
                </div>
                <div className={styles.rightColumn}>
                    <h3>SERVICES</h3>
                    <ul className={styles.links}>
                        <li className={styles.link}>Terms & Conditions</li>
                        <li className={styles.link}>Privacy Policy</li>
                        <li className={styles.link}>FAQ</li>
                    </ul>
                </div>
            </div>
            <div className={styles.logo}>
                <Image src={logo} alt="logo" width={100} height={15} />
            </div>
        </div>
    );
};

export default Footer;
