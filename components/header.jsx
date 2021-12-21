import styles from '../public/static/css/header.module.css';
import logo from '../public/static/images/logo.svg';
import Image from 'next/image';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Image src={logo} alt="logo" width={100} height={80} />
            </div>
            <div className={styles.links}>
                <ul></ul>
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
            </div>
        </div>
    );
};

export default Header;
