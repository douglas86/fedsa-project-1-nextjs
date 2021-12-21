import styles from '../public/static/css/components/header.module.css';
import logo from '../public/static/images/logo.svg';
import Image from 'next/image';

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src={logo} alt="logo" width={100} height={80} />
            </div>
            <ul>
                <li className={styles.links}>
                    <a className={styles.link} href="#">
                        FEATURE
                    </a>
                </li>
                <li className={styles.links}>
                    <a className={styles.link} href="#">
                        ABOUT
                    </a>
                </li>
                <li className={styles.links}>
                    <a className={styles.link} href="#">
                        CONTACT
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Header;
