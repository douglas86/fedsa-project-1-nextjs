import styles from '../public/static/css/components/footer.module.css';
import logo from '../public/static/images/logo.svg';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <h3>This is the footer</h3>
            <div>
                <Image src={logo} alt="logo" width={50} height={20} />
            </div>
        </div>
    );
};

export default Footer;
