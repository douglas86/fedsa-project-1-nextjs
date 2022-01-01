import '../styles/globals.css';
import Layout from '../components/Layout';
import { Provider } from '../components/Context';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Provider>
                <Component {...pageProps} />
            </Provider>
        </Layout>
    );
}

export default MyApp;
