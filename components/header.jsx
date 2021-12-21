import styles from '../public/static/css/header.module.css';
import logo from '../public/static/images/logo.svg';
import Image from 'next/image';

const Header = () => {
    return (
        <>
            <div className={styles.logo}>
                <Image src={logo} alt="logo" width={100} height={80} />
            </div>
        </>
    );
};

export default Header;
