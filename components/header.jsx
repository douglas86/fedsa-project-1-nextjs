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
                <p className={styles.link}>FEATURE</p>
                <p className={styles.link}>ABOUT</p>
                <p className={styles.link}>CONTACT</p>
            </div>
        </div>
    );
};

export default Header;
